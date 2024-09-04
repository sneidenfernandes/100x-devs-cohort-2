
import Heading from "../components/Heading"
import Subheading from "../components/Subheading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"

const stupidFunciton = () => {
    console.log("Stupid function working.")
}

export default function SignUp(){
    return (
        <>
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-lg w-80 px-4 h-max p-2 text-center">
                <Heading label={"Sign up"}/>
                <Subheading label={"Enter your information to create an account"}/>
                <InputBox label={"First Name"} placeholder={"John"} onChange={stupidFunciton}/>
                <InputBox label={"Last Name"} placeholder={"Doe"} onChange={stupidFunciton}/>
                <InputBox label={"Email"} placeholder={"johndoe@example.com"} onChange={stupidFunciton}/>
                <InputBox label={"Password"} placeholder={"********"}/>
                <Button label={"Sign up"}/>



               
                </div>
                
            </div>
        </div>
        </>
    )
}