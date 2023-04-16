import React, { useState, FormEvent } from 'react';

const AddHotel = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [place, setPlace] = useState('');
  const [rooms, setRooms] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  
    try {
      // Call the API to add a new hotel with the provided data
      const response = await fetch('deploy-golang-comp:8000/api/hotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          price,
          place,
          rooms,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add hotel: ${response.statusText}`);
      }
  
      // Clear the input fields after successfully adding the hotel
      setName('');
      setPrice('');
      setPlace('');
      setRooms('');
  
      // Show a success message or perform any other necessary actions
      alert('Hotel added successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to add hotel');
    }
  };
  

  return (
    <div>
      <h1>Add Hotel</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hotel Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Number of Rooms"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
};

export default AddHotel;
