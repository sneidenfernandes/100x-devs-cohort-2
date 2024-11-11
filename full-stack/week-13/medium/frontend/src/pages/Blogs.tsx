import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading,blogs} = useBlogs();

    if (loading){
        return <div className="pt-[8vh] pl-[20vw]">
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
    }

   
    return (
        <div>
            <Appbar/>
            <div className="flex justify-center">
                <div >
                    
                    {blogs.map(blog => 
                    
                        <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content}
                        publishedDate="12.12.12"/>
                    )}
                    
        
                </div>   
            </div>
        </div>
        
        
        
    )
}