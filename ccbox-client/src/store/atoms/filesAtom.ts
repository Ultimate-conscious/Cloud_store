import { atom } from "recoil";
import { fileInterface } from "../../components/folderCard";


export const FilesState = atom({
    key: 'FilesState',
    default: new Array<fileInterface>
})