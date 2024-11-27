import express, {Express, Request, Response, Application } from 'express';


const app: Application = express();
const port = process.env.PORT || 8000;


app.get('/', (req:Request, res:Response) =>{

    res.send('Welcome to the backend!');
})


app.listen(port, ()=> {
    console.log(`Your app is runnning on ${port}`);
})


