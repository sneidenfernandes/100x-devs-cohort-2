import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {decode, sign, verify} from 'hono/jwt';
import type { JwtVariables } from 'hono/jwt';

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string
  }
}>();


app.use('/api/v1/blog/*', async (c,next)=>{
  const headers =  c.req.header("authorization") || "";
  const token = headers.split(" ")[1];

  //@ts-ignore
  const response = verify(token, c.env.JWT_SECRET);

  //@ts-ignore
  if(response.id){
    next();

  }else{
    c.status(403);
    return c.json({error:"unauthorized"});
  }

  await next()

});

app.post('/api/v1/signup', async (c) => {
  


  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password
    }
  });


  //@ts-ignore
  const token = await sign({id: user.id}, c.env.JWT_SECRET);

  return c.json({
    jwt: token
  })
});

app.post('/api/v1/signin', async (c) => {
  const primsa = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await primsa.user.findUnique({
    where:{
      email: body.email,
      password: body.password
    }
  });

  if(!user){
    c.status(403);
    return c.json({
      error : "user not found"
    })
  }


})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})



export default app
