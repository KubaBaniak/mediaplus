import Card from "./components/card/card";
import Carousel from "./components/carousel/carousel";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import "./App.scss";
import SidebarButton from "./components/sidebarButton/sidebarButton";

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
            img_url:
              "https://www.freeiconspng.com/thumbs/website-icon/website-icon-8.png",
          }}
        />
        <Card
          card={{
            title: "Jakub Urbaniak",
            secondaryTitle: "Fullstack",
            text: "Lorem Ipsum is simply dummy text.",
            img_url:
              "https://static.vecteezy.com/system/resources/thumbnails/019/879/196/small_2x/passage-of-time-icon-on-transparent-background-free-png.png",
          }}
        />
        <Card
          card={{
            title: "Jakub Urbaniak",
            secondaryTitle: "Fullstack",
            text: "Lorem Ipsum is simply dummy text.",
            img_url:
              "https://static.vecteezy.com/system/resources/thumbnails/019/879/196/small_2x/passage-of-time-icon-on-transparent-background-free-png.png",
          }}
        />
      </div>
      <SidebarButton />
    </main>
  );
}

export default App;
