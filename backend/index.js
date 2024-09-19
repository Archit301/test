import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import serviceRoutes from "./routes/service_routes.js"
import path from 'path';
const app=express()
app.use(cors())
app.use(express.json());


app.use('/api',serviceRoutes );
const PORT =  5000;
const MONGO="mongodb+srv://tambiarchit:archit123@cluster0.3fffx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose
     .connect(MONGO)
     .then(() => {
        console.log("Database is connected");
      })
      const __dirname = path.resolve()
   app.listen(PORT,()=>{
       console.log(`Server is running on port ${PORT}`);
   })
   
   
   app.use(express.static(path.join(__dirname, '/frontend/dist')));
   
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
   })


