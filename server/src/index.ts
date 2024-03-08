import express from "express";
import 'dotenv/config';


const app = express();

const port = process.env.PORT || 4001;

app.get("/", (_: any, res: any )=>{
    res.send("Hello World");
});

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})

