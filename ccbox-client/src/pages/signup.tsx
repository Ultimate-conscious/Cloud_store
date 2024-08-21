import { useState } from "react";
import { ButtonStyled } from "../components/buttonstyled"
import { InputBoxWithLabel } from "../components/inputbox-label"
import { useNavigate } from "react-router-dom";

export function SignupPage(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

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
        <ButtonStyled title="Signup" handler={async ()=>{
            const response :any = await axios.post("http://localhost:3000/user/signup",{
                name,
                email,
                password
            })
            localStorage.setItem("token",response.data.token)
            navigate('/dashboard')
        }} />
    </div>
}