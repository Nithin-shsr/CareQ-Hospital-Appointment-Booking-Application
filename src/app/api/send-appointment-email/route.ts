import {NextResponse} from "next/server";
import resend from "@/lib/resend";
import AppointmentConfirmationEmail from "@/components/EMAIL/AppointmentConfirmationEmail";

export async function POST(request:Request){
    try{
        const body = await request.json()

        const {userEmail, doctorName, appointmentDate, appointmentTime, appointmentType, duration, price} = body;

        if(!userEmail || !doctorName || !appointmentDate || !appointmentTime){
            return NextResponse.json({error:"Missing required fields"}, {status:400})
        }

        const  {data,error} =await resend.emails.send({
            from : "CareQ <no-reply@resend.dev>",
            to : [userEmail],
            subject : "Appointment Confirmation - CareQ",
            react : AppointmentConfirmationEmail({
                doctorName,
                appointmentDate,
                appointmentTime,
                appointmentType,
                duration,
                price,
            })
        })
        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: error.message || "Failed to send email" },
                { status: 500 }
            );
        }
        return NextResponse.json(
            {message : "Email sent successfully",emailId:data?.id},
            {status:200}
        );
    }
    catch(error){
        console.error("EMAIL Sending error:",error);
        return NextResponse.json({error:"Internal Server Error"},{status : 500});
    }
}