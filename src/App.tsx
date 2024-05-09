import Card from "./components/card/card";
import Carusel from "./components/carusel/carusel";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Carusel />
      <Card cardText={{ title: "bla", secondaryTitle: "dsfg", text: "asdg" }} />
    </main>
  );
}

export default App;
