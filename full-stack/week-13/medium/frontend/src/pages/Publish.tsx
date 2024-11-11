import { useState} from "react";
import { Appbar } from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export default function Publish(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handlePublish = async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title,
            content
        },{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        });
        navigate(`/blogs/${response.data.id}`)
    }

    return (
        <div>
            <Appbar/>
             <div className="flex justify-center h-screen w-full bg-gray-50 flex-col items-center">

                <div className="max-w-screen-lg w-full">
                    <div className="max-w-screen-lg w-full">
                            <input onChange={(e)=> {
                                setTitle(e.target.value)
                            }} id="message" className="block p-2.5 w-full font-bold text-xl text-gray-900 bg-gray-50 rounded-lg focus:outline-none
                            " placeholder="Title..."></input>
                        </div>
                        <div className="max-w-screen-lg w-full mb-[20vh]">
                            <textarea onChange={(e)=>{
                                setContent(e.target.value)
                            }} id="message" rows={10}  className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg focus:outline-none
                            " placeholder="Dive into it..."></textarea>
                        </div>
                        <div className="items-start">
                </div>
                  
                        <div>
                            <button onClick={handlePublish} type="submit" className="inline-flex items-center py-2.5 px-8 text-xs font-medium text-center text-white bg-green-700 rounded-lg  focus:ring-blue-200 ">
                                Publish Post 
                            </button>   
                        </div>
                    </div>
                    
                
            </div>
        </div>
       
    )
}