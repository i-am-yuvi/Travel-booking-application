// src/components/Home.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

interface Hotel {
  id: number;
  name: string;
  price: number;
  place: string;
  rooms: number;
}

const Home = () => {
  const [hotelResults, setHotelResults] = useState<Hotel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch('deploy-golang-comp:8000/api/hoteldisplay'); 
      const hotels: Hotel[] = await response.json();
      setHotelResults(hotels);
    } catch (error) {
      console.error(error);
    }
  };

  const redirectToAddHotel = () => {
    navigate('/addHotel');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={redirectToAddHotel}>Add Hotel</button>
      <div className="hotel-container">
        {hotelResults.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <h2>{hotel.name}</h2>
            <p>Place: {hotel.place}</p>
            <p>Rooms: {hotel.rooms}</p>
            <p>Price: {hotel.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
