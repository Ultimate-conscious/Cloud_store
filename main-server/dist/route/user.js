"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const zodSchemas_1 = require("../utils/zodSchemas");
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const rootfoldercreate_1 = require("../utils/rootfoldercreate");
const client = new client_1.PrismaClient();
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', (req, res) => {
    res.send("HI it is working");
});
exports.userRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { success } = zodSchemas_1.signupSchema.safeParse(body);
    if (!success) {
        return res.status(411).json({
            message: "Signup credentials not valid"
        });
    }
    const existingUser = yield client.user.findFirst({
        where: {
            email: body.email
        }
    });
    if (existingUser) {
        return res.status(411).json({
            message: "User with this email already exist"
        });
    }
    //pw hashing done
    const hashedpw = yield bcrypt_1.default.hash(body.password, 10);
    const user = yield client.user.create({
        data: Object.assign(Object.assign({}, body), { password: hashedpw })
    });
    //get them a jwt
    const token = jsonwebtoken_1.default.sign({
        userId: user.id,
        email: user.email
    }, process.env.JWT_SECRET || "");
    // creating a root folder
    yield (0, rootfoldercreate_1.createRootFolder)(body, user.id);
    return res.json({
        message: "User created succcessfully",
        token
    });
}));
exports.userRouter.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { success } = zodSchemas_1.signinSchema.safeParse(body);
    if (!success) {
        return res.status(411).json({
            message: "Signin credentials not valid"
        });
    }
    const user = yield client.user.findFirst({
        where: {
            email: body.email
        }
    });
    if (!user) {
        return res.status(411).json({
            message: "NO user exists with these credentials"
        });
    }
    bcrypt_1.default.compare(body.password, user.password, (err, result) => {
        if (err || !result) {
            //console.error('Error comparing passwords:', err);
            return res.status(411).json({
                message: "Password is incorrect!"
            });
        }
    });
    //get them a jwt
    const token = jsonwebtoken_1.default.sign({
        userId: user.id,
        email: user.email
    }, process.env.JWT_SECRET || "");
    const folder = yield client.folder.findFirst({
        where: {
            name: user.email,
            userId: user.id
        }
    });
    res.json({
        token,
        message: "User signin done!",
        folderId: folder === null || folder === void 0 ? void 0 : folder.id
    });
}));
