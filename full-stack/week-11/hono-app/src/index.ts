import { Hono, Next } from 'hono'

const app = new Hono()


async function  authMiddleware(c: any,next: any){
  if(c.req.header("Authorization")){
    // do validation
    await next()
  } else{
    return c.next("You dont have access.")
  }
}
app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"))
  return c.json({
    message: "hi there"
  })
})

export default app
