
import { ButtonStyled } from "../components/buttonstyled";
import { InputBoxWithLabel } from "../components/inputbox-label";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signinState } from "../store/atoms/signinAtom";




export function SigninPage(){
    const [state,setState] = useRecoilState(signinState)

    const navigate = useNavigate()
    

    return <div>
        LoginPage

        <InputBoxWithLabel label="Email" placeholder="johndoe@gmail.com" handler={(e)=>{
            setState({
                ...state,
                email: e.target.value
            })
        }}/>
        <InputBoxWithLabel label="Password" placeholder="*******" handler={(e)=>{
            setState({
                ...state,
                password: e.target.value
            })
        }}/>
        <ButtonStyled title="Signin" handler={async ()=>{ 
            //give good types here
            const response :any = await axios.post("http://localhost:3000/user/signin",state)
            localStorage.setItem("token",response.data.token)
            navigate('/dashboard')
        }} />

    </div>
}
