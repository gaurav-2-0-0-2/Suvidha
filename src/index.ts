import express from "express";
import "dotenv/config";
import cors from "cors";

// import {prisma} from "../prisma/prisma"
import { authrouter } from "./routes/auth";
// import { validaterouter } from "./routes/validate.js";

const app = express();

app.use(cors());

const port = process.env.PORT || 4001;

// try {
//   console.log("DB connected success");
// } catch (err) {
//   console.log(`DB connection failed: ${err}`);
// }

app.use(express.json());

// app.get("/", async (_req:Request, res: Response)=>{
//   const allUsers = await  prisma.user.findMany()
//   res.send(allUsers);
// })

app.use("/auth", authrouter);
// app.use("/validate",validaterouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
