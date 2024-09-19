import React from 'react';

export const ServiceList = ({ services, onDelete, onEdit }) => {
  return (
    <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-4">Service List</h2>
    <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left text-gray-600">Service Name</th>
          <th className="px-4 py-2 text-left text-gray-600">Description</th>
          <th className="px-4 py-2 text-left text-gray-600">Price</th>
          <th className="px-4 py-2 text-left text-gray-600">Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service._id} className="border-t hover:bg-gray-50 transition">
            <td className="px-4 py-2">{service.name}</td>
            <td className="px-4 py-2">{service.description}</td>
            <td className="px-4 py-2 font-bold">${service.price}</td>
            <td className="px-4 py-2">
              <button
                onClick={() => onEdit(service)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(service._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};
