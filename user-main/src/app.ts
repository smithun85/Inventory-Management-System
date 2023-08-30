import express, { Express,Request,Response } from 'express';
import bodyParser from 'body-parser'; 
import cors from 'cors';
import dotenv from 'dotenv';
import { route } from './routes/index.routes';

dotenv.config({path : '.env'}); 
const app: Express = express();

app.use(bodyParser.json());
app.use(cors({credentials: true,origin:true}))

app.get("/ping",(req:Request,res:Response) => {
  res.send({
    code:200,
    result:"pong"
  })
})

app.use('/',route);
app.listen(process.env.PORT, () => { 
  console.log(`Server started on port ${process.env.PORT}`);
});