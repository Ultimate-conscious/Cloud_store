"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    const token = req.headers.authorization || "";
    try {
        const result = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "");
        //give better types later
        req.body = Object.assign(Object.assign({}, req.body), { 
            //@ts-ignore
            userId: result.userId, 
            //@ts-ignore
            email: result.email });
    }
    catch (e) {
        return res.json({
            message: "Incorrect auth token"
        });
    }
    next();
}
