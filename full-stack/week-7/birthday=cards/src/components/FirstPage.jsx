import { useNavigate } from "react-router-dom"
export default function FirstPage({onchange}){
    const navigate = useNavigate();

    function onclick(){
        navigate('/BirthdayCards');
    }

    return(
        <div>
            <input onChange={onchange} placeholder="Enter Name" ></input>
            <button onClick={onclick}>Enter</button>
        </div>
    )
}