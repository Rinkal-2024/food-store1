import dotenv from 'dotenv'
dotenv.config();
require('dotenv').config();
// import express from "express";
const express = require('express')
import cors from "cors"
import foodRouter from './router/food.router';
import userRouter from './router/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './router/order.router';
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

app.get('/' , (_req: any,res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; })=>{
    res.status(200).send('hello')
})

app.get('/home', (_req: any,res: { send: (arg0: string) => void; })=>{
    res.send('hii')
})

const port = process.env.port || 7000;
app.listen(port, () => {
    console.log("your website is served on http://localhost:"+port);
});
            
