import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    next();
};

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("name must be a string/required"),
    body("addressLine1").isString().notEmpty().withMessage("addressLine1  must be a string/required"),
    body("city").isString().notEmpty().withMessage("city  must be a string/required"),
    body("country").isString().notEmpty().withMessage("country  must be a string/required"),
    handleValidationErrors
]