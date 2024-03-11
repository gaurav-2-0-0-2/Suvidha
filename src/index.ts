import express from "express";
import 'dotenv/config';
import {authrouter} from "./routes/auth";

const app = express();

app.use(express.json());

const port = process.env.PORT || 4001;

app.use("/auth", authrouter);

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})

