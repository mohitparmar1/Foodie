import { Request, Response } from 'express';
import Restaurant from "../models/restaurant"


const createMyRestaurant = async (req: Request, res: Response) => {
    try {
        const existingRestaurant = await Restaurant.find({
            user: req.userId
        })
        if (existingRestaurant) {
            return res.status(409).json({
                message: "User Restaurant already exists"
            })
        }
        
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