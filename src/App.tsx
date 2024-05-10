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
      <Card cardText={{ title: "bla", secondaryTitle: "dsfg", text: "asdg" }} />
    </main>
  );
}

export default App;
