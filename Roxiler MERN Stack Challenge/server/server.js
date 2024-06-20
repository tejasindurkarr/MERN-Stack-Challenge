import express from 'express';
import 'colors'; 
import dotenv from 'dotenv';
import connectDB from './Config/connect.js'; 
import transactionRouter from './Routes/transactionRoutes.js';
import databaseRoutes from './Routes/databaseRoutes.js';

const app = express(); //intialising express app
import cors from 'cors';

const port = process.env.PORT;
const mongoURI = process.env.MONGO_ATLAS_URI;
const secretKey = process.env.SECRET_KEY;

app.use(express.json()) // allow json parsing

dotenv.config(); // extracting environment variables

connectDB(); // connecting to mongodb atlas

app.use(
    cors({
        credentials: true,
        origin:'http://localhost:5173'
    })
);

// Middlewares
app.use('/', databaseRoutes) // Database Routes
app.use('/', transactionRouter); //Tranasction Routes


// listening to the port
app.listen(process.env.PORT, ()=> {
    console.log(`--> server is live on https://localhost:${process.env.PORT} <--`.blue.italic)
})

