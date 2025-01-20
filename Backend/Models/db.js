import { connect } from "mongoose";
import { EnvironmentVariables } from "../config/config.js";
// const mongo_url = "mongodb+srv://bhupenbhagat10:YC3BFab2roTGww0B@cluster0.a4qkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/userAccount";
const mongo_url=EnvironmentVariables.CONNSTRING+`${EnvironmentVariables.AUTHDB}`

connect(mongo_url)
    .then(()=>{
      console.log('MongoDB Connected.....')
    }).catch((err)=>{
      console.log('MongoDB Connection Error:',err);
    })
