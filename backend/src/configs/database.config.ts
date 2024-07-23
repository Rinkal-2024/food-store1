import {connect ,ConnectOptions } from "mongoose";


export const dbConnect = () =>{
    connect('mongodb+srv://rinkal:P8gTc7nO4MJu1mEk@cluster0.k3xiiif.mongodb.net/Food-Store?retryWrites=true&w=majority&appName=Cluster0',{
        //  userNewUrlParser : true,
        //  userUniFiedTopology :true

    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) =>console.log(error)  
    )
}
