
import { Service } from "../models/service_model.js";
export const getServices = async (req, res) => {
    const services = await Service.find();
    res.json(services);
  };
  
  
 export  const addService = async (req, res) => {
    const { name, description, price } = req.body;
    const newService = new Service({ name, description, price });
    await newService.save();
    res.json(newService);
  };
  
  
  export const updateService = async (req, res) => {
    const { id } = req.params;
    const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedService);
  };
  
  
 export  const deleteService = async (req, res) => {
    const { id } = req.params;
    await Service.findByIdAndDelete(id);
    res.json({ message: 'Service deleted' });
  };