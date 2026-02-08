import Link from "next/link";
import {HeartPulse} from "lucide-react"
import {SignInButton, SignUpButton} from "@clerk/nextjs";
import {Button} from "../ui/button";

function Header(){
    return (
        <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
            <div className="max-w-6xl mx-auto flex justify-between items-center ">
                <Link href="/" className="flex items-center gap-2">
                    <HeartPulse  className="w-9 h-9 text-primary"/>
                    <span className="font-semibold text-lg">CareQ</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-muted-foreground hover:text-foreground">How It Works</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">About</a>
                </div>

                <div className="flex items-center gap-3">
                    <SignInButton mode={"modal"}>
                        <Button variant={"ghost"} size={"sm"}>
                            Login
                        </Button>
                    </SignInButton>
                    <SignUpButton mode={"modal"}>
                        <Button variant={"default"} size={"sm"}>
                            SignUp
                        </Button>
                    </SignUpButton>
                </div>
            </div>
        </nav>
    );
}
export default Header;