import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";

function App() {
  const horseData = [
    {
      img: "src/assets/white_horse.jpg",
      horseId: 1,
      horseName: "white young horse",
      price: 5000,
    },
    {
      img: "src/assets/rasing_horse.png",
      horseId: 2,
      horseName: "racing horse",
      price: 20000,
    },
    {
      img: "src/assets/horse_crousel.jpg",
      horseId: 3,
      horseName: "black young horse",
      price: 10000,
    },
    {
      img: "src/assets/Marwari_horse.jpg",
      horseId: 4,
      horseName: "MarWari_horse",
      price: 15000,
    },
  ];

  return (
    <>
      <Navbar />
      <Carousel />
      <Card horseData={horseData} />
    </>
  );
}

export default App;
