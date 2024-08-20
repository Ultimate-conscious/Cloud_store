import { ButtonStyled } from "../components/buttonstyled";
import { InputBoxWithLabel } from "../components/inputbox-label";


export function LoginPage(){
    return <div>
        LoginPage

        <InputBoxWithLabel label="Email" placeholder="johndoe@gmail.com"/>
        <InputBoxWithLabel label="Password" placeholder="*******"/>
        <ButtonStyled title="Signin" onClick={()=>{ alert('bhai button dab gaya')}} />

    </div>
}