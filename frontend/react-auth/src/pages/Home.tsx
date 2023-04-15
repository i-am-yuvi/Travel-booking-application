import React from 'react';
import { useState, FormEvent } from 'react';
import Amadeus from 'amadeus';


const Home = () =>{

     interface Hotel {
          hotel: {
            name: string;
            rating: number;
            address: {
              fullAddress: string;
            };
          };
          offers: {
            price: {
              total: number;
              currency: string;
            };
          }[];
     }

     const amadeus = new Amadeus({
          clientId: process.env.AMADEUS_APIKEY || '',
          clientSecret: process.env.AMADEUS_SECRETKEY || '',
        });
        

     const [place, setPlace] = useState('');
     const [arrivalDate, setArrivalDate] = useState('');
     const [departureDate, setDepartureDate] = useState('');
     const [hotelResults, setHotelResults] = useState<Hotel[]>([]);


     const handleSubmit = async (event: FormEvent) => {
          event.preventDefault();
          const hotels = await fetchHotels(place, arrivalDate, departureDate);
          setHotelResults(hotels);
        };
        

     const fetchHotels = async (cityCode: string, arrivalDate: string, departureDate: string) => {
          try {
            const response = await amadeus.referenceData.locations.hotels.get({
              cityCode,
              checkInDate: arrivalDate,
              checkOutDate: departureDate,
            });
        
            return response.data;
          } catch (error) {
            console.error(error);
            return [];
          }
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
               {hotelResults.map((hotel, index) => (
                    <div key={index}>
                         <h2>{hotel.hotel.name}</h2>
                         <p>Rating: {hotel.hotel.rating}</p>
                         <p>Address: {hotel.hotel.address.fullAddress}</p>
                         <p>Price: {hotel.offers[0].price.total} {hotel.offers[0].price.currency}</p>
                    </div>
               ))}
          </div>
     );
};

export default Home;