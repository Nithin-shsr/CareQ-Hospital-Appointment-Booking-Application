import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
//   const username = name.replace(/\s+/g, "").toLowerCase();
//   const base = "https://avatar.iran.liara.run/public";
//   if (gender === "FEMALE") return `${base}/girl?username=${username}`;
//   // default to boy
//   return `${base}/boy?username=${username}`;
// }

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

export function generateAvatar(name: string) {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
      name
  )}`;
}
