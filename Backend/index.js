import express from 'express';
const app=express();
import './Models/db.js';

// Tofetch the details of login
import bodyParser from 'body-parser';
import cors from 'cors';
//const AuthRouter = require('./Routes/AuthRouter.js');
import router  from './Routes/AuthRouter.js'
import { EnvironmentVariables } from './config/config.js';
const PORT=EnvironmentVariables.port || 5000;

app.get('/ping',(req,res) => {
  res.send('PONG');
});

app.use(bodyParser.json());
//To allow the incoming request from other ports
//Pass the ip/headers in parameter to access allow to that particular user only 
app.use(cors());
app.use('/auth',router);

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
})