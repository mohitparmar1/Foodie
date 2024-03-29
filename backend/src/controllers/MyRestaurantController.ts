import { Request, Response } from 'express';
import cloudinary from "cloudinary";
import Restaurant from "../models/restaurant"
import mongoose from 'mongoose';


const createMyRestaurant = async (req: Request, res: Response) => {
    try {
        const existingRestaurant = await Restaurant.findOne({
            user: req.userId
        })
        if (existingRestaurant) {
            return res.status(409).json({
                message: "User Restaurant already exists"
            })
        }
        const image = req.file as Express.Multer.File;
        const base64Image = Buffer.from(image.buffer).toString("base64");
        const baseURI = `data:${image.mimetype};base64,${base64Image}`;


        const uploadResponse = await cloudinary.v2.uploader.upload(baseURI);

        const restaurant = new Restaurant(req.body);
        restaurant.imageUrl = uploadResponse.url;
        restaurant.user = new mongoose.Types.ObjectId(req.userId)
        restaurant.lastUpdated = new Date();
        await restaurant.save();
        res.status(201).json({
            message: "Restaurant created successfully"
            ,
            restaurant: restaurant
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error creating restaurant"
        })
    }

};

export default {
    createMyRestaurant
}