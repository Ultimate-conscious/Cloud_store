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
exports.folderRouter = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../utils/authMiddleware");
const client_1 = require("@prisma/client");
const zodSchemas_1 = require("../utils/zodSchemas");
exports.folderRouter = (0, express_1.Router)();
exports.folderRouter.use(authMiddleware_1.authMiddleware);
const client = new client_1.PrismaClient();
exports.folderRouter.get('/getfolders/:parentId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parentId = Number(req.params.parentId);
    const { success } = zodSchemas_1.getFoldersSchema.safeParse(body);
    if (!success) {
        return res.json({
            message: "Incorrect request body provided!"
        });
    }
    const folders = yield client.folder.findMany({
        where: {
            parentId,
            userId: body.userId
        }
    });
    const files = yield client.file.findMany({
        where: {
            userId: body.userId,
            folderId: body.parentId
        }
    });
    res.status(200).json({
        folders,
        files
    });
}));
exports.folderRouter.post('/createfolder', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { success } = zodSchemas_1.folderCreateSchema.safeParse(body);
    if (!success) {
        return res.json({
            message: "Incorrect Request body provided!"
        });
    }
    const newfolder = yield client.folder.create({
        data: {
            name: body.name,
            userId: body.userId,
            parentId: body.parentId
        }
    });
    return res.json({
        message: "Folder created successfully"
    });
}));
exports.folderRouter.delete('/deletefolder', (req, res) => {
});
