import HealthOverview from "@/components/Dashboard Page/HealthOverview";
import NextAppointment from "@/components/Dashboard Page/NextAppointment";

function ActivityOverview(){
    return (
        <div className="grid lg:grid-cols-3 gap-6">
            <HealthOverview/>
            <NextAppointment/>
        </div>
    )
}
export default ActivityOverview;