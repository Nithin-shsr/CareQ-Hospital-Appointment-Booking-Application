"use server";

import {prisma} from "../prisma";
import {Gender} from "@prisma/client";
import {generateAvatar} from "../utils";
import {revalidatePath} from "next/cache";
export async function getDoctors(){
    try{
        const doctors = await prisma.doctor.findMany({
            include : {
                _count:{select:{appointments:true}},
            },
            orderBy : {createdAt:"desc"}
        })
        return doctors.map(doctor =>({
            ...doctor,
            appointmentCount : doctor._count.appointments,
        }));
    }
    catch (error){
        console.log("Error fetching doctors",error);
        throw new Error("Failed to fetch doctors");
    }
}

interface CreateDoctorInput{
    name:string;
    email:string;
    phone:string;
    speciality:string;
    gender:Gender;
    isActive:boolean;
}

export async function createDoctor(input:CreateDoctorInput){
    try{
        if(!input.name || !input.email) throw new Error("Name and Email are required");

        const doctor = await prisma.doctor.create({
            data:{
                ...input,
                imageUrl:generateAvatar(input.name),
            }
        });

        revalidatePath("/admin");
        return doctor;
    }
    catch (error : any){
        console.log("Error creating doctor",error);
        if(error?.code === "P2002"){
            throw new Error("A doctor with this email already exists")
        }
        throw new Error("Failed to create doctor")
    }
}

interface UpdateDoctorInput extends Partial<CreateDoctorInput>{
    id:string;
}

export async function updateDoctor(input : UpdateDoctorInput){
    try{
        if(!input.name || !input.email) throw new Error("Name and Email are required");

        const currentDoctor = await prisma.doctor.findUnique({
            where:{id:input.id},
            select:{email:true},
        })

        if(!currentDoctor){
            throw new Error("Doctor not found");
        }

        if(input.email !== currentDoctor.email){
            const existingDoctor = await prisma.doctor.findUnique({
                where : {email : input.email},
            });

            if(existingDoctor){
                throw new Error("Doctor with this email already exists")
            }
        }
        const doctor =   await prisma.doctor.update({
            where : {id : input.id},

            data:{
                //  ...input is going to get input for all the fields and will spread it accordingly..
                name : input.name,
                email : input.email,
                phone : input.phone,
                speciality : input.speciality,
                gender : input.gender,
                isActive:input.isActive,
            }
        })
        return doctor;
    }
    catch(error){
        console.error("Error updating doctor",error);
        throw new Error("Failed to update doctor")
    }
}