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

export const validateMyRestaurantRequest = [
    body("restaurantName").isString().notEmpty().withMessage("restaurantName must be a string/required"),
    body("city").isString().notEmpty().withMessage("city  must be a string/required"),
    body("country").isString().notEmpty().withMessage("country  must be a string/required"),
    body("deliveryPrice").isFloat({ min: 0 }).withMessage("deliveryPrice must be positive number"),
    body("cuisines").isArray().withMessage("cuisines must be an array").notEmpty().withMessage("cuisines array must not be empty"),
    body("menuItems").isArray().withMessage("menuItems must be an array"),
    body("menuItems.*.name").notEmpty().withMessage("menu item name is required "),
    body("menuItems.*.price").isFloat({ min: 0 }).withMessage("menu item price is required"),
    handleValidationErrors
]