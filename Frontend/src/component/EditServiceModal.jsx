import React, { useState } from 'react';
import axios from 'axios';

export const EditServiceModal = ({ service, onClose, onServiceUpdated }) => {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);  // Populate description
  const [price, setPrice] = useState(service.price);

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/services/${service._id}`, { name, description, price });
      onServiceUpdated(); // Refresh service list after update
      onClose(); // Close the modal
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit Service</h2>
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
        <div className="flex justify-end">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
