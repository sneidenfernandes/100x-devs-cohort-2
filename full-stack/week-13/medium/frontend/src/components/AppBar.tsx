import Avatar from "./Avatar"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={"/blogs"} className="flex flex-col font-bold justify-center">
                <div>
                    Medium
                </div>
            </Link>
            <div className="flex">
                <Link to={"/publish"}>
                    <button type="button" className="mr-[2vw] text-white bg-green-700 hover:bg-green-800 font-medium 
                    rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>
                </Link>
                
                
                <div>
                    <Avatar name="Sneiden" size="big"/>
                </div>
        
            </div>
           
        </div>
    )
}