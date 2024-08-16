import express from "express";
import { userRouter } from "./route/user";
import { fileRouter } from "./route/fileManip";

const app = express();

app.use(express.json());

app.use('/user',userRouter);

app.use('/file',fileRouter);


app.listen(3000,()=>{
    console.log("Main server listening on 3000")
})