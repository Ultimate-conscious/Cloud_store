import { UploadService } from "./UploadService"

export function Appbar(){
    return (
        <div className="grid grid-cols-3 border-b-2 py-3">
            <div className="flex justify-center">
                <button className="border-2 p-2 rounded-md cursor-pointer bg-green-400">
                    Download    
                </button> 
            </div>
            <div className="flex justify-center">
                <button className="border-2 p-2 rounded-md cursor-pointer bg-green-400">
                    Create Folder    
                </button> 
            </div>
            <div className="flex justify-center ">
                <button className="border-2 p-2 rounded-md cursor-pointer bg-green-400">
                    <UploadService/>  
                </button>
            </div >
        </div>
    )
}