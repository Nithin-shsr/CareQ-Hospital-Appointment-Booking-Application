
import {HeartPulse} from "lucide-react";

function Footer() {
    return (
        <footer className="px-6 py-12 border-t bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <HeartPulse  className="w-9 h-9 text-primary"/>
                            <span className="font-semibold text-lg">
                                CareQ
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            AI-powered hospital appointment booking system designed to make
                            healthcare access faster and easier for patients.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-medium mb-3">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    How it works
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Appointments
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Departments
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-medium mb-3">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Help center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Contact support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    System status
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-medium mb-3">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Terms of service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Data security
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        &copy; 2024 CareQ. Simplifying hospital appointments and
                        improving patient experience through AI.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
