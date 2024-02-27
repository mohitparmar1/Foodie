import express from "express";
import multer from "multer";
import createRestaurant from "../controllers/MyRestaurantController";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
const router = express.Router();


const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})

// /api/my/restaurant

router.post("/",
    jwtCheck,
    jwtParse,
    upload.single("imageFile"), MyRestaurantController.createMyRestaurant);

export default router;