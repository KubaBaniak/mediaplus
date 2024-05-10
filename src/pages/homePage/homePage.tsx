import GlobalHeader from "../../components/globalHeader/globalHeader";
import Carousel from "../../components/carousel/carousel";
import Card from "../../components/card/card";
import ScheduleCard from "../../components/card/cardSchedule";
import SidebarButton from "../../components/sidebarButton/sidebarButton";
import { FaHospitalAlt, FaClipboardList, FaRegClock } from "react-icons/fa";

export default function HomePageContent() {
  return (
    <main className="main-section">
      <GlobalHeader />
      <Carousel />
      <div className="card-section">
        <Card
          card={{
            title: "Jakub Urbaniak",
            secondaryTitle: "Fullstack",
            text: "Lorem Ipsum is simply dummy text.",
            icon: FaHospitalAlt,
          }}
        />
        <Card
          card={{
            title: "Jakub Urbaniak",
            secondaryTitle: "Fullstack",
            text: "Lorem Ipsum is simply dummy text.",
            icon: FaClipboardList,
          }}
        />
        <ScheduleCard
          scheduleCardData={{
            title: "Fullstack",
            secondaryTitle: "Jakub Urbaniak",
            text: [
              { days: "Monday - Friday", time: "8:00-20:00" },
              { days: "Saturnday", time: "9:00-18:30" },
              { days: "Monday - Thusday", time: "9:00-15:00" },
            ],
            icon: FaRegClock,
          }}
        />
      </div>
      <SidebarButton />
    </main>
  );
}
