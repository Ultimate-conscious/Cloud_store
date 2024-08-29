import { atom } from "recoil";
import { folderInterface } from "../../components/folderCard";


export const FoldersState = atom({
    key: 'FoldersState',
    default: new Array<folderInterface>
})