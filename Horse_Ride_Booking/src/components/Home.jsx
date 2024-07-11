import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Card from "./Card";
import { useState } from "react";

const Home = () => {
  const [horseData, setHorseData] = useState([
    {
      img: "src/assets/white_horse.jpg",
      horseId: 1,
      horseName: "white young horse",
      price: 5000,
    },
    {
      img: "src/assets/rasing_horse.png",
      horseId: 2,
      horseName: "raceing horse",
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
  ]);

  return (
    <>
      <Navbar />
      <Carousel />
      <Card horseData={horseData} />
    </>
  );
};

export default Home;
