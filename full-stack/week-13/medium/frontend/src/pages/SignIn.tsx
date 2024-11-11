
import { Auth } from "../components/Auth";
import SignUpQuote from "../components/SignUpQuote";


export default function SignUp(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type='signin'/>
            </div>
            <div className="hidden lg:block">
                <SignUpQuote/>
            </div>
        </div>
    )
}