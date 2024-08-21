import { useRecoilState } from "recoil";
import { ButtonStyled } from "../components/buttonstyled"
import { InputBoxWithLabel } from "../components/inputbox-label"
import { useNavigate } from "react-router-dom";
import { signupState } from "../store/atoms/signupAtom";

export function SignupPage(){
    const [state,setState] = useRecoilState(signupState);
    const navigate = useNavigate();

    return <div>
        signup
        <InputBoxWithLabel label="Full Name" placeholder="John Doe"  handler={(e)=>{
            setState({
                ...state,
                name: e.target.value
            })
        }}/>
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
        <ButtonStyled title="Signup" handler={async ()=>{
            const response :any = await axios.post("http://localhost:3000/user/signup",state)
            
            localStorage.setItem("token",response.data.token)
            navigate('/dashboard')
        }} />
    </div>
}