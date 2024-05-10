import Card from "./components/card/card";
import Carousel from "./components/carousel/carousel";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import "./App.scss";
import SidebarButton from "./components/sidebarButton/sidebarButton";
import { FaHospitalAlt, FaClipboardList, FaRegClock } from "react-icons/fa";

function App() {
  return (
    <main className="main-section">
      <Header />
      <Navbar />
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
        <Card
          card={{
            title: "Jakub Urbaniak",
            secondaryTitle: "Fullstack",
            text: "Lorem Ipsum is simply dummy text.",
            icon: FaRegClock,
          }}
        />
      </div>
      <SidebarButton />
    </main>
  );
}

export default App;
