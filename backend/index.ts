import dotenv from 'dotenv'
dotenv.config();
// require('dotenv').config();
import express from "express";
import cors from "cors"
import jwt from "jsonwebtoken"
import { sample_foods, sample_tags, sample_users } from "./src/data";
import foodRouter from './src/router/food.router';
import userRouter from './src/router/user.router';
import { dbConnect } from './src/configs/database.config';
import orderRouter from './src/router/order.router';
dbConnect();

const app = express();
app.use(express.json());

app.use(cors({
    credentials : true,
    origin : ["https://food-store1-master.vercel.app"]
}));

app.use("/api/food" ,foodRouter);
app.use("/api/users" ,userRouter);
app.use("/api/orders" ,orderRouter);


app.use('/home' , (req,res)=>{
    res.status(200).send('hello')
})

const port =4000;
app.listen(port, () => {
    console.log("your website is served on http://localhost:4000");
});
            
