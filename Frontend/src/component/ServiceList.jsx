import React from 'react';

export const ServiceList = ({ services, onDelete, onEdit }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Service List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Service Name</th>
            <th className="px-4 py-2">Description</th> {/* New column for description */}
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id} className="border-t">
              <td className="px-4 py-2">{service.name}</td>
              <td className="px-4 py-2">{service.description}</td> {/* Display the description */}
              <td className="px-4 py-2">${service.price}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onEdit(service)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(service._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
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
