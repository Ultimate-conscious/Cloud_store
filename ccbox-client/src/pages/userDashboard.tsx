import { useParams } from "react-router-dom"
import { Appbar } from "../components/appbar"
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState} from "recoil";
import { FoldersState } from "../store/atoms/foldersAtom";
import { FolderCard } from "../components/folderCard";


export function UserDashboard(){
    const {folderId} = useParams();
    const [currfolderId,setFolderId] = useState(Number(folderId?.charAt(1)));
    const [folders,setFolders] = useRecoilState(FoldersState);

    const url = import.meta.env.VITE_MAIN_SERVER_URL;

    useEffect(()=>{

        axios.get(`${url}/folder/getfolders/${currfolderId}`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then(res=>{
            //@ts-ignore
            setFolders(res.data.folders)
        })
    },[currfolderId])

    return (
        <div>
            <Appbar/>
            <div className="flex justify-between">
                {folders.map(folder=> <FolderCard key={folder.id} folder={folder} />)}
            </div>
            
        </div>
    )
}