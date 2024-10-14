import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import orderRoute from "./routes/orderRoute.js";
import productRoutes from './routes/productRoute.js';

dotenv.config();
const app = express();

// Add these middleware
app.use(express.json()); // To parse incoming JSON payloads
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
//Route

// Routes
app.use('/api/orders', orderRoute);
app.use('/api/products', productRoutes);

app.get("/",(req,res)=>{
    res.send("Hello World")
})

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on PORT ${PORT}`)
    })
}).catch(err => console.log(err))