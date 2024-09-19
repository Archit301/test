import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import serviceRoutes from "./routes/service_routes.js"
import path from 'path';
const app=express()
app.use(cors())
app.use(express.json());


app.use('/api',serviceRoutes );

const MONGO="mongodb+srv://tambiarchit:archit123@cluster0.3fffx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose
     .connect(MONGO)
     .then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})


const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});