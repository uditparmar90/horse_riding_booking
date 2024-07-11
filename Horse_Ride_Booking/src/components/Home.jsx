import Carousel from './Carousel';
import Navbar from './Navbar';
import Card from './Card';
import { useState } from 'react';

import HorseRideBookingForm from'./HorseRideBookingForm';
const Home = (handleBookRide) => {
    const [horseData,setHorseData]=useState([{
        img :'src/assets/horse_crousel.jpg',
        horseId:1,
        horseName:"white young horse",
        price:5000

    },{
        img :'src/assets/horse_crousel.jpg',
        horseId:2,
        horseName:"raceing ",
        price:20000
        
    },{
        img :'src/assets/horse_crousel.jpg',
        horseId:3,
        horseName:"black young horse",
        price:10000
        
    },{
        img :'src/assets/horse_crousel.jpg',
        horseId:4,
        horseName:"white young",
        price:15000
        
    }])

    return(
        <>
        <Navbar/>
        <Carousel/>
        <Card horseData={horseData} handleBookRide={handleBookRide}/>
        <HorseRideBookingForm handleBookRide={handleBookRide}/>
        </>
    )
}

export default Home;
