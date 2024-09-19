import express from "express"
import {getServices, addService, updateService, deleteService } from "../controller/service_controller.js";
const router = express.Router();

router.get('/services', getServices);


router.post('/services', addService);


router.put('/services/:id', updateService);


router.delete('/services/:id', deleteService);


export default router