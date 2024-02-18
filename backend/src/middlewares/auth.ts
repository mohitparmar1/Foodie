import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { auth } from "express-oauth2-jwt-bearer";
import User from "../models/user";

declare global {
    namespace Express {
        interface Request {
            auth0Id: string;
            userId: string;
        }
    }
}

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE as string,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL as string,
    tokenSigningAlg: "RS256",
});

export const jwtParse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
        if (!authorization || !authorization.startsWith("Bearer ")) {
            throw new Error("Invalid token");
        }
        const token = authorization.split(" ")[1];
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0Id = decoded.sub;
        const user = await User.findOne({ auth0Id });
        if (!user) {
            throw new Error("User not found");
        }
        req.auth0Id = auth0Id as string;
        req.userId = user._id.toString();
        next();

    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
