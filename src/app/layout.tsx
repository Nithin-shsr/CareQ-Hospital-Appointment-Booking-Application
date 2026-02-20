import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import React from "react";
import UserSync from "../components/UserSync"
import TanStackProvider from "@/components/providers/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareQ - Hospital Appointment Booking System",
  description: "CareQ is a modern hospital appointment booking system that allows patients to schedule doctor visits, manage time slots, and reduce waiting times efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
          >
          <TanStackProvider>
              <ClerkProvider
                  appearance={{
                      baseTheme: undefined, // ⬅️ forces LIGHT mode
                      variables: {
                          colorPrimary: "#34a85a",
                          colorBackground: "#ffffff",
                          colorText: "#333333",
                          colorInputBackground: "#f9f9fa",
                          colorInputText: "#333333",
                          colorNeutral: "#6e6e6e",
                          borderRadius: "0.5rem",
                          fontFamily: "var(--font-sans)",
                      },
                      elements: {
                          card: "bg-white border border-border shadow-xl",
                          headerTitle: "text-foreground",
                          headerSubtitle: "text-muted-foreground",
                          formFieldLabel: "text-foreground",
                          formFieldInput:
                              "bg-input text-foreground border-border focus:ring-ring",
                          formButtonPrimary:
                              "bg-primary text-primary-foreground hover:bg-primary/90",
                          footerActionLink: "text-primary hover:text-primary/80",
                          dividerLine: "bg-border",
                      },
                  }}
              >
                  <UserSync/>
                  {children}
                </ClerkProvider>
          </TanStackProvider>
          </body>
        </html>
      
  );
}
