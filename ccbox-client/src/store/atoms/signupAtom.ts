import { atom } from "recoil";


export const signupState = atom({
    key:'signupState',
    default: {
        name:"",
        email:"",
        password:""
    }
})