import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AddServiceForm } from './AddServiceForm';
import { ServiceList } from './ServiceList';
import { EditServiceModal } from './EditServiceModal';

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/services/${id}`);
      fetchServices(); // Refresh the services list after deletion
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
    setEditingService(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Service Management</h1>
      <AddServiceForm onServiceAdded={fetchServices} />
      <ServiceList services={services} onDelete={handleDelete} onEdit={handleEdit} />
      {isEditModalOpen && (
        <EditServiceModal service={editingService} onClose={closeModal} onServiceUpdated={fetchServices} />
      )}
    </div>
  );
};

export default ServiceManagement;
