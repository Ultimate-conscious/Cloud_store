import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import image from '../../public/uploadImage.png'
import { Button } from "@/components/ui/button"
import { ChangeEvent} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"





export const UploadService = ()=>{
    const {folderId} = useParams()

    const Id = Number(folderId?.charAt(1));

    let requestBody = {};
    
    async function filehandler(e:ChangeEvent){

        e.preventDefault()
        //@ts-ignore
        const fileProps = {name: e.target.files["0"].name, contentType: e.target.files["0"].type,folderId:Id}
        console.log(fileProps)
        console.log(Id);
        requestBody = {...fileProps}
       
    }
    async function clickHandler(){
        const url = import.meta.env.VITE_MAIN_SERVER_URL

        // const uploadUrl = await  axios.put(`${url}/file/uploadfile`,requestBody,{
        //     headers: {
        //         Authorization: localStorage.getItem('token')
        //     }
        // })
        //const resp = await axios.put(url,)

    }

    return (
        <Sheet>
            <SheetTrigger>Upload</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Upload any file</SheetTitle>
                <SheetDescription>
                    <img className="grid w-full max-w-sm items-center" src={image}/>
                </SheetDescription>
                </SheetHeader>
                <div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 p-2">
                        <Label htmlFor="file">File</Label>
                        <Input id="file" type="file" onChange={filehandler} />
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={clickHandler}  className="grid w-20 text-white items-center gap-1.5 p-2">
                            Upload
                        </Button>
                    </div>
                </div>
                
            </SheetContent>

            </Sheet>
    )
}