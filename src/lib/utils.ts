import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import girlImg from "./girl.png";
import boyImg from "./boy.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatar(gender: "MALE" | "FEMALE") {
  if (gender === "FEMALE") return girlImg;
  return boyImg;
}

export const formatIndianPhoneNumber = (value: string) => {
  if (!value) return value;

  // Remove all non-digits
  const phoneNumber = value.replace(/\D/g, "");

  // Handle country code +91
  let cleaned = phoneNumber;

  if (cleaned.startsWith("91") && cleaned.length > 10) {
    cleaned = cleaned.slice(-10);
  }

  if (cleaned.length <= 5) return cleaned;

  return `${cleaned.slice(0, 5)} ${cleaned.slice(5, 10)}`;
};

export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
};

export const APPOINTMENT_TYPES = [
  { id: "new_consultation", name: "New Patient Consultation", duration: "30 min", price: "₹800" },
  { id: "follow_up", name: "Follow-up Consultation", duration: "20 min", price: "₹500" },
  { id: "routine_checkup", name: "Routine Checkup", duration: "30 min", price: "₹600" },
  { id: "emergency", name: "Emergency Visit", duration: "20 min", price: "₹1200" },
  { id: "procedure_minor", name: "Minor Procedure", duration: "60 min", price: "₹2500" },
  { id: "pre_surgery", name: "Pre-Surgery Evaluation", duration: "45 min", price: "₹1500" },
  { id: "post_surgery", name: "Post-Surgery Follow-up", duration: "30 min", price: "₹900" },
];
