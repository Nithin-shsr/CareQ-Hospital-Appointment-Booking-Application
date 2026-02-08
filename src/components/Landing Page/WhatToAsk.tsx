import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";

function WhatToAsk() {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
                        <MessageCircleIcon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            Patient Support Conversations
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Ask about
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            your health concerns
                        </span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        From common symptoms to general health concerns, our system helps patients
                        understand their condition and guides them toward the right care.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Interactive Chat Examples */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-8">
                                Common questions patients ask:
                            </h3>

                            {/* Chat Bubble 1 */}
                            <div className="group relative">
                                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <MessageSquareIcon className="h-6 w-6 text-primary" />
                                        </div>

                                        <div className="space-y-3 flex-1">
                                            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                                                <p className="font-semibold text-primary">
                                                    "I have a fever and body pain"
                                                </p>
                                            </div>

                                            <div className="bg-muted/30 rounded-2xl p-4">
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Get guidance on possible causes, basic care steps,
                                                    and whether you should consult a doctor immediately.
                                                </p>

                                                <div className="flex gap-2 mt-3">
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Instant Guidance
                                                    </span>
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Symptom Check
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Bubble 2 */}
                            <div className="group relative">
                                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <MessageSquareIcon className="h-6 w-6 text-primary" />
                                        </div>

                                        <div className="space-y-3 flex-1">
                                            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                                                <p className="font-semibold text-primary">
                                                    "Which department should I consult?"
                                                </p>
                                            </div>

                                            <div className="bg-muted/30 rounded-2xl p-4">
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Understand which medical department fits your condition
                                                    and how to book an appointment easily.
                                                </p>

                                                <div className="flex gap-2 mt-3">
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Department Guidance
                                                    </span>
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Appointment Help
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Bubble 3 */}
                            <div className="group relative">
                                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <MessageSquareIcon className="h-6 w-6 text-primary" />
                                        </div>

                                        <div className="space-y-3 flex-1">
                                            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                                                <p className="font-semibold text-primary">
                                                    "When should I visit a doctor?"
                                                </p>
                                            </div>

                                            <div className="bg-muted/30 rounded-2xl p-4">
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Learn about warning signs, urgency levels,
                                                    and the right time to consult a doctor.
                                                </p>

                                                <div className="flex gap-2 mt-3">
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Preventive Care
                                                    </span>
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Health Awareness
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Illustration */}
                    <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500">
                        <div className="flex items-center justify-center h-full">
                            <Image
                                src="/confused-robot.png"
                                alt="Patient Health Assistant"
                                width={500}
                                height={500}
                                className="w-full h-auto max-w-lg object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatToAsk;
