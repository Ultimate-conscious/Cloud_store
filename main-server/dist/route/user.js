"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const zodSchemas_1 = require("../utils/zodSchemas");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', (req, res) => {
    res.send("HI it is working");
});
exports.userRouter.post('/signup', (req, res) => {
    const body = req.body;
    const { success } = zodSchemas_1.signupSchema.safeParse(body);
    if (!success) {
        return res.status(411).json({
            message: "Signup credentials not valid"
        });
    }
});
exports.userRouter.post('/signin', (req, res) => {
    const body = req.body;
    const { success } = zodSchemas_1.signinSchema.safeParse(body);
    if (!success) {
        return res.status(411).json({
            message: "Signin credentials not valid"
        });
    }
});
