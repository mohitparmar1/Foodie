import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import MyUserRoutes from "./routes/MyUserRoutes"


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => {
        console.log("database connected successfully");
    })

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", MyUserRoutes);

app.listen(7000, () => {
    console.log("Server is running on localhost:7000");
});