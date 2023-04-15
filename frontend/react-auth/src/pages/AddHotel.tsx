import React, { useState, FormEvent } from 'react';

const AddHotel = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [place, setPlace] = useState('');
  const [rooms, setRooms] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Call the API to add a new hotel with the provided data
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
