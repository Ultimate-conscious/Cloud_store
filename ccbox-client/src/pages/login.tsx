import { useState } from "react";
import { ButtonStyled } from "../components/buttonstyled";
import { InputBoxWithLabel } from "../components/inputbox-label";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate()
    

    return <div>
        LoginPage

        <InputBoxWithLabel label="Email" placeholder="johndoe@gmail.com" handler={(e)=>{
            setEmail(e.target.value);
        }}/>
        <InputBoxWithLabel label="Password" placeholder="*******" handler={(e)=>{
            setPassword(e.target.value);
        }}/>
        <ButtonStyled title="Signin" handler={async ()=>{ 
            //give good types here
            const response :any = await axios.post("http://localhost:3000/user/signin",{
                email,
                password
            })
            localStorage.setItem("token",response.data.token)
            navigate('/dashboard')
        }} />

    </div>
}
