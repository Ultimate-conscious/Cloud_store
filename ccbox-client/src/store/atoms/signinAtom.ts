import { atom } from "recoil";


export const signinState = atom({
    key:'signinState',
    default: {
        email:"",
        password:""
    }
})