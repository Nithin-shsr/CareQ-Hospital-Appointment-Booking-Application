import {Gender} from "@prisma/client";
import{useState} from "react";
import {useCreateDoctor} from "@/hooks/use-doctors";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "../ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {Button} from "@/components/ui/button";
import {formatIndianPhoneNumber} from "@/lib/utils";

interface AddDoctorDialogBoxProps {
    isOpen : boolean
    onClose : () => void
}

function AddDoctorDialogBox({isOpen , onClose}: AddDoctorDialogBoxProps) {
    const [newDoctor, setNewDoctor] = useState(
        {
            name: "",
            email:"",
            phone:"",
            speciality:"",
            gender:"MALE" as Gender,
            isActive:true,
        });
    const createDoctorMutation = useCreateDoctor();

    const handlePhoneChange = (value:string) =>{
        const formattedPhoneNumber = formatIndianPhoneNumber(value)
        setNewDoctor({...newDoctor,phone: formattedPhoneNumber})
    }

    const handleSave =() =>{
        createDoctorMutation.mutate({...newDoctor},{ onSuccess:handleClose })
    };

    const handleClose = () => {
        onClose();
        setNewDoctor({
            name:"",
            email:"",
            phone:"",
            speciality:"",
            gender:"MALE",
            isActive: true,
        });
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Add New Doctor</DialogTitle>
                    <DialogDescription>Add a new doctor to your practice.</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">

                    {/*In Dialog Box Name and Speciality Field Below*/}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="new-name">Name *</Label>
                            <Input
                                id="new-name"
                                value={newDoctor.name}
                                onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                                placeholder="Dr. John Smith"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="new-speciality">Speciality *</Label>
                            <Input
                                id="new-speciality"
                                value={newDoctor.speciality}
                                onChange={(e) => setNewDoctor({ ...newDoctor, speciality: e.target.value })}
                                placeholder="Orthopedic Surgeon"
                            />
                        </div>
                    </div>

                    {/*In Dialog Box Email Field Below*/}
                    <div className="space-y-2">
                        <Label htmlFor="new-email">Email *</Label>
                        <Input
                            id="new-email"
                            type="email"
                            value={newDoctor.email}
                            onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })}
                            placeholder="doctor@example.com"
                        />
                    </div>

                    {/*In Dialog Box Phone Number Field Below*/}
                    <div className="space-y-2">
                        <Label htmlFor="new-phone">Phone</Label>
                        <Input
                            id="new-phone"
                            value={newDoctor.phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder="+91 12345 67890"
                        />
                    </div>

                    {/*In Dialog Box Gender and Status Field Below*/}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="new-gender">Gender</Label>
                            <Select
                                value={newDoctor.gender || ""}
                                onValueChange={(value) => setNewDoctor({ ...newDoctor, gender: value as Gender })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="MALE">Male</SelectItem>
                                    <SelectItem value="FEMALE">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="new-status">Status</Label>
                            <Select
                                value={newDoctor.isActive ? "active" : "inactive"}
                                onValueChange={(value) =>
                                    setNewDoctor({ ...newDoctor, isActive: value === "active" })
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}
                            className="bg-primary hover:bg-primary/90"
                            disabled={!newDoctor.name || !newDoctor.email || !newDoctor.speciality || createDoctorMutation.isPending}
                    >
                        {createDoctorMutation.isPending ? "Adding..." : "Add Doctor"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddDoctorDialogBox;