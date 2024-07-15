import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Card from "./Card";

const Home = () => {
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
      {/* <Provider> */}
      {/* <BrowserRouter> */}
      <Navbar />
      <Carousel />
      <Card horseData={horseData} />
      {/* </BrowserRouter> */}
      {/* </Provider> */}
    </>
  );
};

export default Home;
