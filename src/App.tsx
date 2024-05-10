import Card from "./components/card/card";
import Carousel from "./components/carousel/carousel";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import "./App.scss";

function App() {
  return (
    <main className="main-section">
      <Header />
      <Navbar />
      <Carousel />
      <Card
        card={{
          title: "Jakub Urbaniak",
          secondaryTitle: "Fullstack",
          text: "Lorem Ipsum is simply dummy text.",
          img_url:
            "https://static.vecteezy.com/system/resources/thumbnails/019/879/196/small_2x/passage-of-time-icon-on-transparent-background-free-png.png",
        }}
      />
    </main>
  );
}

export default App;
