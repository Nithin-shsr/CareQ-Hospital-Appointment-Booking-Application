import Header from "../components/Landing Page/Header"
import Hero from "../components/Landing Page/Hero"
import WhatToAsk from "../components/Landing Page/WhatToAsk"
import PricingSection from "../components/Landing Page/PricingSection"
import CTA from "../components/Landing Page/CTA"
import Footer from "../components/Landing Page/Footer"
import HowItWorks from "../components/Landing Page/HowItWorks"
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

export default async function Home() {
    const user = await currentUser();

    //Redirects authorised user to the dashboard page
    if(user) redirect("/dashboard")
    return (
       <div className="min-h-screen bg-background">
           <Header/>
           <Hero/>
           <HowItWorks/>
           <WhatToAsk/>
           <PricingSection/>
           <CTA/>
           <Footer/>
       </div>
    )
}
