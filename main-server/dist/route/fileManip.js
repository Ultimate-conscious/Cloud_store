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
const s3client_1 = require("../utils/s3client");
exports.fileRouter = (0, express_1.Router)();
exports.fileRouter.use(authMiddleware_1.authMiddleware);
const client = new client_1.PrismaClient();
exports.fileRouter.put('/uploadfile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const url = yield (0, s3client_1.getUploadURL)(body.key, body.contentType);
    res.json({
        url
    });
}));
exports.fileRouter.get('/getfile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const url = yield (0, s3client_1.getObjectURL)(body.key);
    return res.json({
        url
    });
}));
// fileRouter.post('/createfolder',async (req,res)=>{
//     //check if any more auth checks are required
//     const body = req.body;
//     const {success} = folderCreateSchema.safeParse(body);
//     if(!success){
//         return res.status(411).json({
//             message: "Indavid inputs"
//         })
//     }
//     const folder = await client.folder.create({
//         data:{
//             ...body
//         }
//     })
//     return res.json({
//         message: "Folder created successfully"
//     })
// })
// fileRouter.delete('/deletefolder',(req,res)=>{
// })
// fileRouter.delete('/deletefile',(req,res)=>{
// })
