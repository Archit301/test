import React, { useState } from 'react';
import axios from 'axios';

export const AddServiceForm = ({ onServiceAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');  // New state for description
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/services', { name, description, price });
      setName('');
      setDescription(''); // Reset the description field
      setPrice('');
      onServiceAdded();
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Service</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Service Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Service Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Service Description"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Price"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Service
      </button>
    </form>
  );
};
