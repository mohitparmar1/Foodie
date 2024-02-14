import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => {
        console.log("database connected successfully");
    })

const app = express();

app.use(cors());
app.use(express.json());


app.get("/test", async (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(7000, () => {
    console.log("Server is running on localhost:7000");
});