import {connect ,ConnectOptions } from "mongoose";


export const dbConnect = () =>{
    connect(process.env.MONGO_URI!,{
        // userNewUrlParser : true,
        // userUniFiedTopology :true

    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) =>console.log(error)  
    )
}