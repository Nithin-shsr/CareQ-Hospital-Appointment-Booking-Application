import {auth} from "@clerk/nextjs/server";
import ProPlanRequired from "@/components/Voice Agent/ProPlanRequired";
import NavBar from "@/components/NavBar";
import WelcomeSection from "@/components/Voice Agent/WelcomeSection";
import FeatureCards from "@/components/Voice Agent/FeatureCards";
import VapiWidget from "@/components/Voice Agent/VapiWidget";

async function VoicePage() {
    const {has} = await auth();
    const hasProPlan = has({plan: "ai_basic"}) || has({plan: "ai_pro"});
    if (!hasProPlan) return <ProPlanRequired/>

    return (
        <div className="min-h-screen bg-background">
            <NavBar/>
            <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
                <WelcomeSection/>
                <FeatureCards/>
            </div>
            <VapiWidget/>
        </div>
    )
}
export default VoicePage;