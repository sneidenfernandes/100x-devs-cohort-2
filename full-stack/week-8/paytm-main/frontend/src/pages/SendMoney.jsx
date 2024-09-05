
import {useSearchParams} from 'react-router-dom';
import axios from "axios";
import {useState} from 'react';
import InputBox from '../components/InputBox'
import Button from '../components/Button'


export default function SendMoney(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div>

                    </div>

                    <InputBox onChange={(e=>{
                        setAmount(e.target.value)
                    })}label={"Amount: "}/>
                    <Button onClick={()=>{
                        axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to:id,
                            amount
                        }, {headers:{
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }})
                    }} label={"Initiate Transfer"}/>
                   
                    
                

                </div>
            </div>

        </div>
    )
}