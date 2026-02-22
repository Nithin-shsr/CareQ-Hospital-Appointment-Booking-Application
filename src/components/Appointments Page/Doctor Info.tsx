import { useAvailableDoctors } from "@/hooks/use-doctors";
import Image from "next/image";
import {generateAvatar} from "@/lib/utils";

function DoctorInfo({ doctorId }: { doctorId: string }) {
    const { data: doctors = [] } = useAvailableDoctors();
    const doctor = doctors.find((d) => d.id === doctorId);

    if (!doctor) return null;

    return (
        <div className="flex items-center gap-4">
            <Image
                src={generateAvatar(doctor.gender)} // pass gender, not name
                alt={doctor.name}
                width={48}
                height={48}
                className="rounded-full"
                unoptimized
            />
            <div>
                <h3 className="font-medium">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground">{doctor.speciality || "General Dentistry"}</p>
            </div>
        </div>
    );
}

export default DoctorInfo;