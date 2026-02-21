"use server";

import { prisma } from "../prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

// Utility to transform appointment objects
function transformAppointment(appointment: any) {
    return {
        ...appointment,
        patientName: `${appointment.user.firstName || ""} ${appointment.user.lastName || ""}`.trim(),
        patientEmail: appointment.user.email,
        doctorName: appointment.doctor.name,
        doctorImageUrl: appointment.doctor.imageUrl || "",
        date: appointment.date.toISOString().split("T")[0],
    };
}

// Helper: Fetch Clerk profile info for logged-in user
async function getClerkUserProfile(userId: string) {
    const clerkProfile = await currentUser(); // gets authenticated Clerk user
    if (!clerkProfile || clerkProfile.id !== userId) {
        throw new Error("Failed to fetch Clerk user profile.");
    }

    return {
        email: clerkProfile.emailAddresses[0]?.emailAddress || `user_${userId}@example.com`,
        firstName: clerkProfile.firstName || "Unknown",
        lastName: clerkProfile.lastName || "User",
        id: clerkProfile.id,
    };
}

// Get all appointments (admin view)
export async function getAppointments() {
    try {
        const appointments = await prisma.appointment.findMany({
            include: {
                user: { select: { firstName: true, lastName: true, email: true } },
                doctor: { select: { name: true, imageUrl: true } },
            },
            orderBy: { createdAt: "desc" },
        });

        return appointments.map(transformAppointment);
    } catch (error) {
        console.error("Error fetching all appointments:", error);
        throw new Error("Failed to fetch appointments.");
    }
}

// Get appointments for the logged-in user
export async function getUserAppointments() {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("You must be logged in to view appointments");

        // Sync Clerk user to DB
        const clerkUser = await getClerkUserProfile(userId);
        const user = await prisma.user.upsert({
            where: { email: clerkUser.email }, // unique field
            update: {
                clerkId: userId,
                firstName: clerkUser.firstName,
                lastName: clerkUser.lastName,
            },
            create: {
                clerkId: userId,
                email: clerkUser.email,
                firstName: clerkUser.firstName,
                lastName: clerkUser.lastName,
            },
        });

        const appointments = await prisma.appointment.findMany({
            where: { userId: user.id },
            include: {
                user: { select: { firstName: true, lastName: true, email: true } },
                doctor: { select: { name: true, imageUrl: true } },
            },
            orderBy: [{ date: "asc" }, { time: "asc" }],
        });

        return appointments.map(transformAppointment);
    } catch (error) {
        console.error("Error fetching user appointments:", error);
        throw new Error("Failed to fetch user appointments.");
    }
}

// Get appointment statistics for the logged-in user
export async function getUserAppointmentStats() {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("You must be authenticated");

        // Sync Clerk user to DB
        const clerkUser = await getClerkUserProfile(userId);
        const user = await prisma.user.upsert({
            where: { email: clerkUser.email },
            update: {
                clerkId: userId,
                firstName: clerkUser.firstName,
                lastName: clerkUser.lastName,
            },
            create: {
                clerkId: userId,
                email: clerkUser.email,
                firstName: clerkUser.firstName,
                lastName: clerkUser.lastName,
            },
        });

        // Fetch total and completed appointment counts
        const [totalCount, completedCount] = await Promise.all([
            prisma.appointment.count({ where: { userId: user.id } }),
            prisma.appointment.count({ where: { userId: user.id, status: "COMPLETED" } }),
        ]);

        return {
            totalAppointments: totalCount,
            completedAppointments: completedCount,
        };
    } catch (error) {
        console.error("Error fetching user appointment stats:", error);
        return {
            totalAppointments: 0,
            completedAppointments: 0,
        };
    }
}
