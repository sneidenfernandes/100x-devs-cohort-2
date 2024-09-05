

import Heading from "../components/Heading"
import Subheading from "../components/Subheading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import BottomWarning from "../components/BottomWarning"

const stupidFunciton = () => {
    console.log("Stupid function working.")
}
export default function SignIn(){
    return (
        <>
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-lg w-80 px-4 h-max p-2 text-center">
                <Heading label={"Sign in"}/>
                <Subheading label={"Enter your credentials to access your account"}/>
                <InputBox label={"First Name"} placeholder={"John"} onChange={stupidFunciton}/>
                <InputBox label={"Last Name"} placeholder={"Doe"} onChange={stupidFunciton}/>
                <Button label={"Sign in"}/>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>

                
            </div>
        </div>
        </>
    )
}