import { Blog } from "../hooks"
import { Appbar } from "./AppBar"
import Avatar from "./Avatar"


export const FullBlog  = ({blog} :{blog: Blog}) => {
    
    return (
        <div>
            <Appbar/>
            <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-[5vh]">
                <div className=" col-span-8">
                    <div className="text-5xl font-extrabold ">
                        {blog.title}
                    </div>
                    <div className="text-gray-400 pt-[1vh]">
                        Posted on 2nd December 2023
                    </div>
                    <div className="pt-[2vh]">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-gray-500">
                        Author
                    </div>
                        
                    <div className="flex w-full pt-[2vh]">
                            <div className="mr-[1vw] flex flex-col justify-center">
                                <Avatar size="big" name={blog.author.name}/>
                            </div>
                            
                            <div className="h-">
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="text-gray-400">
                                    Random catch phrase about the author
                                    to grab the users attention 
                                </div>
                           
                            </div>
                        
                        
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    )
}