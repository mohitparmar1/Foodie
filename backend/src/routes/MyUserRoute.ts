import express from "express";
import MyUserController from "../controllers/MyUserController"
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyUserRequest } from "../middlewares/Validation";

const router = express.Router();

router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put("/", jwtCheck, jwtParse,
    validateMyUserRequest,
    MyUserController.upadateCurrentUser)
export default router;