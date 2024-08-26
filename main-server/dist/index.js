"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./route/user");
const fileManip_1 = require("./route/fileManip");
const cors_1 = __importDefault(require("cors"));
const folderManip_1 = require("./route/folderManip");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/user', user_1.userRouter);
app.use('/file', fileManip_1.fileRouter);
app.use('/folder', folderManip_1.folderRouter);
app.listen(3000, () => {
    console.log("Main server listening on 3000");
});
