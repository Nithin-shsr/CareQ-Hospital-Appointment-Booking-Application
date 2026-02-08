import {SignUpButton} from "@clerk/nextjs";
import {CalendarIcon, MicIcon} from "lucide-react";
import {Button} from "../ui/button";
import Image from "next/image";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
            </div>

            {/* Glow */}
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 w-full px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/*LEFT SIDE CONTENT*/}
                            <div className="space-y-10">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    <span className="text-sm font-medium text-primary">
                                      AI-Powered Hospital Booking
                                    </span>
                                </div>

                                {/* Heading */}
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                    <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                                      Book Hospital
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                      Appointments
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                                      Instantly
                                    </span>
                                </h1>

                                {/* Subheading */}
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                                    CareQ makes hospital appointments seamless with intelligent scheduling,
                                    real-time availability, and AI assistance.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 ">
                                    <SignUpButton mode={"modal"}>
                                        <Button size={"lg"}>
                                            <MicIcon className="mr-2 size-5"/>
                                            Try Voice Agent
                                        </Button>

                                    </SignUpButton>

                                    <SignUpButton mode={"modal"}>
                                        <Button size={"lg"} variant={"outline"}>
                                            <CalendarIcon className="mr-2 size-5"/>
                                            Book Appointment
                                        </Button>

                                    </SignUpButton>
                                </div>
                            </div>
                            {/*RIGHT SIDE CONTENT*/}
                            <div className="relative lg:pl-8">
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

                                <Image
                                    src="/heroImg.png"
                                    alt="CareQ AI Assistant"
                                    width={500}
                                    height={500}
                                    priority
                                    className="relative z-10 w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                                />
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
