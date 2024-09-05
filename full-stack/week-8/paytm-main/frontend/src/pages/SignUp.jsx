
import Heading from "../components/Heading"
import Subheading from "../components/Subheading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import BottomWarning from "../components/BottomWarning"
import { useState } from "react"
import {useNavigate} from "react-router-dom";

const stupidFunciton = () => {
    console.log("Stupid function working.")
}

export default function SignUp(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-lg w-80 px-4 h-max p-2 text-center">
                <Heading label={"Sign up"}/>
                <Subheading label={"Enter your information to create an account"}/>
                <InputBox label={"First Name"} placeholder={"John"} onChange={(e) => {
                    setFirstName(e.target.value)
                }}/>
                <InputBox label={"Last Name"} placeholder={"Doe"} onChange={(e)=>{
                    setLastName(e.target.value)
                }}/>
                <InputBox label={"Email"} placeholder={"johndoe@example.com"} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <InputBox label={"Password"} placeholder={"********"} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <Button label={"Sign up"} onClick={async ()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        username,
                        firstName,
                        lastName,
                        password
                    });

                    localStorage.setItem("token", response.data.token)
                    navigate("/dashboard")
                }}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
        </>
    )
}