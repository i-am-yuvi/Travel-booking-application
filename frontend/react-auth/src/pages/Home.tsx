import React from 'react';
import { useState } from 'react';

const Home = () =>{

     const [place, setPlace] = useState('');
     const [arrivalDate, setArrivalDate] = useState('');
     const [departureDate, setDepartureDate] = useState('');
     const [hotelResults, setHotelResults] = useState([]);

     const handleSubmit = async (event: { preventDefault: () => void; }) => {
     event.preventDefault();
          // Call Amadeus API here
     };

     return(
          <div>
               <h1>Home Page</h1>
               <form onSubmit={handleSubmit}>
                    <br/>
                    <input type="text" placeholder="Place of visit" value={place} onChange={(e) => setPlace(e.target.value)}/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Date of Visit:</p>
                    <input type="date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)}/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Date of Leave:</p>
                    <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)}/>
                    <br/>
                    <br/>
                    <button type="submit">Search Hotels</button>
                    <br/>
               </form>
          {/* Render hotelResults here */}
          </div>
     );
};

export default Home;