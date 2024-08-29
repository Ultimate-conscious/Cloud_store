import { Link } from "react-router-dom";



export function LandingPage(){

    return <div>
        Landing
        <div>
        <Link className="px-3" to={'/signup'}>New here, want to Signup ?</Link>
        <Link className="px-3" to={'/signin'}>Signin</Link>
        </div>
    </div>
}