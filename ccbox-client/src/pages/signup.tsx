import { ButtonStyled } from "../components/buttonstyled"
import { InputBoxWithLabel } from "../components/inputbox-label"

export function SignupPage(){
    return <div>
        signup
        <InputBoxWithLabel label="Full Name" placeholder="John Doe"/>
        <InputBoxWithLabel label="Email" placeholder="johndoe@gmail.com"/>
        <InputBoxWithLabel label="Password" placeholder="*******"/>
        <ButtonStyled title="Signup" onClick={()=>{ alert('bhai button dab gaya')}} />
    </div>
}