import {Doctor} from "@prisma/client";
import {useAvailableDoctors} from "@/hooks/use-doctors";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { MapPinIcon, PhoneIcon, StarIcon} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import {generateAvatar} from "@/lib/utils";
import {DoctorCardsLoading} from "@/components/Appointments Page/DoctorCardsLoading";
interface DoctorSelectionStepProps {
    selectedDoctorId : string | null;
    onContinue: () => void;
    onSelectDoctor: (doctorId: string) => void;
}

function DoctorSelectionStep({onContinue, onSelectDoctor,selectedDoctorId}: DoctorSelectionStepProps) {

    const {data:doctors=[],isLoading} = useAvailableDoctors();
    if(isLoading) return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Choose Your Doctor</h2>
            <DoctorCardsLoading/>
        </div>
    )

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
                Choose Your Doctor
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor)=>(
                    <Card key={doctor.id} className={`cursor-pointer transition-all hover:shadow-lg 
                    ${selectedDoctorId === doctor.id ? "ring-2 ring-primary":""}`
                    } onClick={()=> onSelectDoctor(doctor.id)}>
                        <CardHeader className="pb-4">
                            <div className="flex items-start gap-4">
                                <Image
                                    src={generateAvatar(doctor.gender)} // pass gender, not name
                                    alt={doctor.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                    unoptimized
                                />


                                <div className="flex-1">
                                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                                    <CardDescription className="text-primary font-medium">
                                        {doctor.speciality || "General Surgeon"}
                                    </CardDescription>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="flex items-center gap-1">
                                            <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            <span className="text-sm font-medium">5</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                          ({doctor.appointmentCount} appointments)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPinIcon className="w-4 h-4" />
                                <span>CareQ</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <PhoneIcon className="w-4 h-4" />
                                <span>{doctor.phone}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {doctor.bio || "Experienced health care professional providing quality care."}
                            </p>
                            <Badge variant="secondary">Licensed Professional</Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {selectedDoctorId && (
                <div className="flex justify-end">
                    <Button onClick={onContinue}>Continue to Time Selection</Button>
                </div>
            )}
        </div>
    )
}
export default DoctorSelectionStep;