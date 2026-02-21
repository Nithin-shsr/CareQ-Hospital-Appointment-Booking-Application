import NavBar from "@/components/NavBar";
import WelcomeSection from "@/components/Dashboard Page/WelcomeSection";
import MainActions from "@/components/Dashboard Page/MainActions";
import ActivityOverview from "@/components/Dashboard Page/ActivityOverview";
import HealthOverview from "@/components/Dashboard Page/HealthOverview";
import NextAppointment from "@/components/Dashboard Page/NextAppointment";

function DashboardPage(){
    return (
        <>
            <NavBar/>
            <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
                <WelcomeSection/>
                <MainActions/>
                <ActivityOverview/>
            </div>
        </>
    )
}
export default DashboardPage;