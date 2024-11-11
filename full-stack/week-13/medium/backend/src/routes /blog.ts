import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign , verify} from 'hono/jwt';
import { createBlogInput, CreateBlogInput, updateBlogInput } from "my-something-something";


interface Bindings{
    
    DATABASE_URL : string,
    JWT_SECRET : string,
   
}

interface Variables {
    userId: string;
}

export const blogRouter = new Hono<{
    Bindings: Bindings,
    Variables: Variables

}>();


blogRouter.use('/*', async (c,next)=>{
    try{
        const authHeader = c.req.header('authorization') || "";
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if(user){
        c.set("userId", user.id as string);
        await next();

    } else {
        c.status(403);
        return c.json({
            message: 'You are not logged in'
        });
    }
    } catch(e){
        c.status(403);
        return c.json({
            message: 'You are not logged in'
        });
    }
    
});


blogRouter.post('/', async (c)=>{
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    
    if(!success){
        c.status(411);
        return c.json({
            "message": "Invalid Inputs"
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());


   
    const authorId = c.get("userId")
    const blog = await prisma.blog.create({
        data: {
          
            title: body.title,
            content: body.content,
            authorId: Number(authorId)
        }

    
    });

    return c.json({
        id: blog.id
    });

    });


  
blogRouter.put('/', async (c)=>{

    const body = await c.req.json();

    const {success} = updateBlogInput.safeParse(body);
    
    if(!success){
        c.status(411);
        return c.json({
            "message": "Invalid Inputs"
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());



    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }

    
    });

    return c.json({
        id: blog.id
    });
  });


blogRouter.get('/bulk', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());

      const blogs = await prisma.blog.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select:{
                    name: true
                }
            }
        }
      });
      
      return c.json({
        blogs
      })
  })
  
  
blogRouter.get('/:id', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());

    try{
        const paramId = c.req.param('id');

        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(paramId)
            },
            select : {
                title:true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }

        });

        return c.json({
            blog
        });
    } catch(e) {
        console.log(e);
        c.status(411);
        return c.json({
            message: 'Error while fetching blog post'
        });
    }
  });
  
