import { useNavigate } from "react-router-dom"


export interface folderInterface{
    id: number,
    name: string,
    parentId: number,
    userId: number,
}

export const FolderCard = ({folder}:{folder:folderInterface,})=>{

    const navigate = useNavigate();

    const clickHandler = ()=>{
        navigate(`/dashboard/:${folder.id}`)
    }
    return (
        <div  className=" bg-blue-400 p-3 m-2">
            <div className="text-center pb-2">
                {folder.name}    
            </div>
            <div className="text-center">
                <button className="bg-green-300 rounded-sm p-1 " onClick={clickHandler} >Open</button>
            </div>
        </div>
    )
}