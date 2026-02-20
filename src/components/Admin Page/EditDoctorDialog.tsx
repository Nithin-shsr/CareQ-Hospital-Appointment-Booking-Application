import {Doctor, Gender} from "@prisma/client";
import {JSX, useState} from "react";
import {useUpdateDoctor} from "@/hooks/use-doctors";
import {formatIndianPhoneNumber} from "@/lib/utils";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "../ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";


interface EditDoctorDialogProps {
    isOpen : boolean;
    onClose : () => void;
    doctor: Doctor | null;
}

function EditDoctorDialog({doctor,isOpen,onClose,}: EditDoctorDialogProps) {
    const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(doctor);

    const updateDoctorMutation = useUpdateDoctor();

    const handlePhoneChange = (value:string) =>{
        const formattedPhoneNumber = formatIndianPhoneNumber(value);
        if(editingDoctor){
            setEditingDoctor({...editingDoctor,phone: formattedPhoneNumber})
        }
    }

    const handleSave =() =>{
            if(editingDoctor){
                updateDoctorMutation.mutate({...editingDoctor},{ onSuccess:handleClose })
            }
    }

    const handleClose =() =>{
        onClose();
        setEditingDoctor(null);
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Edit Doctor</DialogTitle>
                    <DialogDescription>Update doctor information and status.</DialogDescription>
                </DialogHeader>

                {editingDoctor && (
                    <div className="grid gap-4 py-4">

                        {/*In Dialog Box Name and Speciality Field Below*/}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="new-name">Name *</Label>
                                <Input
                                    id="new-name"
                                    value={editingDoctor.name}
                                    onChange={(e) => setEditingDoctor({ ...editingDoctor, name: e.target.value })}
                                    placeholder="Dr. John Smith"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="new-speciality">Speciality *</Label>
                                <Input
                                    id="new-speciality"
                                    value={editingDoctor.speciality}
                                    onChange={(e) => setEditingDoctor({ ...editingDoctor, speciality: e.target.value })}
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
                                value={editingDoctor.email}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, email: e.target.value })}
                                placeholder="doctor@example.com"
                            />
                        </div>

                        {/*In Dialog Box Phone Number Field Below*/}
                        <div className="space-y-2">
                            <Label htmlFor="new-phone">Phone</Label>
                            <Input
                                id="new-phone"
                                value={editingDoctor.phone}
                                onChange={(e) => handlePhoneChange(e.target.value)}
                                placeholder="+91 12345 67890"
                            />
                        </div>

                        {/*In Dialog Box Gender and Status Field Below*/}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="new-gender">Gender</Label>
                                <Select
                                    value={editingDoctor.gender || ""}
                                    onValueChange={(value) => setEditingDoctor({ ...editingDoctor, gender: value as Gender })}
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
                                    value={editingDoctor.isActive ? "active" : "inactive"}
                                    onValueChange={(value) =>
                                        setEditingDoctor({ ...editingDoctor, isActive: value === "active" })
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
                )}
                <DialogFooter>
                    <Button variant="outline" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}
                            className="bg-primary hover:bg-primary/90"
                            disabled={updateDoctorMutation.isPending}
                    >
                        {updateDoctorMutation.isPending ? "Saving..." : "Save Changes"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default EditDoctorDialog;