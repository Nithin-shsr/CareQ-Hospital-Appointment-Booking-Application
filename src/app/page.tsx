import Header from "../components/Landing Page/Header"
import Hero from "../components/Landing Page/Hero"
import WhatToAsk from "../components/Landing Page/WhatToAsk"
import PricingSection from "../components/Landing Page/PricingSection"
import CTA from "../components/Landing Page/CTA"
import Footer from "../components/Landing Page/Footer"
import HowItWorks from "../components/Landing Page/HowItWorks"

export default function Home() {
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
