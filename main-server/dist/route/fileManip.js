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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../utils/authMiddleware");
const client_1 = require("@prisma/client");
const zodSchemas_1 = require("../utils/zodSchemas");
const s3client_1 = require("../utils/s3client");
const client = new client_1.PrismaClient();
exports.fileRouter = (0, express_1.Router)();
exports.fileRouter.use(authMiddleware_1.authMiddleware);
exports.fileRouter.post('/createfolder', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //check if any more auth checks are required
    const body = req.body;
    const { success } = zodSchemas_1.folderCreateSchema.safeParse(body);
    if (!success) {
        return res.status(411).json({
            message: "Indavid inputs"
        });
    }
    const folder = yield client.folder.create({
        data: Object.assign({}, body)
    });
    return res.json({
        message: "Folder created successfully"
    });
}));
exports.fileRouter.post('/uploadfile', (req, res) => {
});
exports.fileRouter.delete('/deletefolder', (req, res) => {
});
exports.fileRouter.delete('/deletefile', (req, res) => {
});
exports.fileRouter.get('/getfile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const url = yield (0, s3client_1.getObjectURL)(body.key);
    return res.json({
        url
    });
}));
