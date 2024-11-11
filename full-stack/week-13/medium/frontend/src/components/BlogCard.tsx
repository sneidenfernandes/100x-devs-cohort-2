import Avatar from "./Avatar";
import { Link } from "react-router-dom";

interface BlogCardProps {
    id: number
    authorName: string;
    title: string;
    content: string;
    publishedDate : string;
}

export  const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
} : BlogCardProps) => {

    return (
        <Link to={`/blogs/${id}`}>
        <div className=" border-b border-slate-200 rounded w-screen max-w-screen-lg">
           
           <div className="p-4">
           <div className="flex">
                <div className="flex flex-col justify-center">
                    <Avatar name={authorName}/>
                </div>

            
                <div className="font-thin pl-2 flex flex-col justify-center">
                    {authorName}
                </div>
                <div className="text-xs flex flex-col justify-center pl-2">
                    <Circle/>
                </div>
                
                <div className="pl-2 font-thin text-slate-400 flex flex-col justify-center">
                    {publishedDate}       
                </div>
            
                
            </div>
            <div className="font-semibold text-xl pt-3">
                {title}
            </div>
            <div className="text-md font-thin pt-1">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-400 text-xs font-thin pt-2">
                {`${Math.ceil(content.length/100)} min read`}
            </div>
           </div>
            
          
        </div>
        </Link>

    )
}



export function Circle(){
    return (
        <div className="bg-slate-400 rounded-full h-1 w-1">

        </div>
    )
}

