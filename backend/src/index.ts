import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import { v2 as cloudinary } from "cloudinary";
import MyUserRoutes from "./routes/MyUserRoute"
import MyRestaurantRoute from "./routes/MyRestaurantRoute"


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => {
        console.log("database connected successfully");
    })

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "Health OK" });
})

app.use("/api/my/user", MyUserRoutes);
app.use("/api/my/restaurant", MyRestaurantRoute);

app.listen(7000, () => {
    console.log("Server is running on localhost:7000");
});