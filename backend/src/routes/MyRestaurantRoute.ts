import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyRestaurantRequest } from "../middlewares/Validation";
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
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse,
    MyRestaurantController.createMyRestaurant);

export default router;