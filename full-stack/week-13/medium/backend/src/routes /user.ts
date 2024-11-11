import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign , verify} from 'hono/jwt';
import { signUpInput, signinInput } from 'my-something-something';

interface Bindings {
    DATABASE_URL : string,
    JWT_SECRET : string,
}




export const userRouter = new Hono<{
    Bindings: Bindings
}> ();


userRouter.post('/signup', async (c) => {

    const body = await c.req.json();
    const {success} = signUpInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message: 'Inputs not correct.'
        })
    }
    console.log(success);
    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    
  try{
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password
  
      }
    });
  
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET)
    return c.text(jwt);
  }
  catch(e){
    console.log(e);
    c.status(411);
    return c.text('INVALID')
  }
  });

  
  
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json();

    const {success} = signinInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            "message": "invalid inputs"
        });
    }
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    
  try{
    const user = await prisma.user.findFirst({
      where:  {
        
        email: body.email,
        password: body.password
      }
    });
  
    if(!user){
      c.status(403);
      return c.json({
        "message": "Invalid Credentials'"
      });
  
    }
  
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET)
    return c.text(user.id + " " + jwt);
  }
  catch(e){
    c.status(411);
    return c.text('INVALID')
  }
  });