"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoldersSchema = exports.folderCreateSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupSchema = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.signinSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.folderCreateSchema = zod_1.default.object({
    name: zod_1.default.string(),
    userId: zod_1.default.number(),
    parentId: zod_1.default.number().optional(),
    email: zod_1.default.string().email()
});
exports.getFoldersSchema = zod_1.default.object({
    userId: zod_1.default.number(),
    parentId: zod_1.default.number(),
    email: zod_1.default.string().email()
});
