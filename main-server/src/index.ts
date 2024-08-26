import express from "express";
import { userRouter } from "./route/user";
import { fileRouter } from "./route/fileManip";
import cors from "cors";
import { folderRouter } from "./route/folderManip";

const app = express();

app.use(express.json());
app.use(cors())

app.use('/user',userRouter);
app.use('/file',fileRouter);
app.use('/folder',folderRouter);


app.listen(3000,()=>{
    console.log("Main server listening on 3000")
})