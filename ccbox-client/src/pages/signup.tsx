import { useState } from "react";
import { ButtonStyled } from "../components/buttonstyled"
import { InputBoxWithLabel } from "../components/inputbox-label"

export function SignupPage(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return <div>
        signup
        <InputBoxWithLabel label="Full Name" placeholder="John Doe"  handler={(e)=>{
            setName(e.target.value)
        }}/>
        <InputBoxWithLabel label="Email" placeholder="johndoe@gmail.com" handler={(e)=>{
            setEmail(e.target.value)
        }}/>
        <InputBoxWithLabel label="Password" placeholder="*******" handler={(e)=>{
            setPassword(e.target.value)
        }}/>
        <ButtonStyled title="Signup" handler={()=>{ alert('bhai button dab gaya')}} />
    </div>
}