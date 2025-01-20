import { MongoClient } from "mongodb";
const uri = "mongodb+srv://bhupenbhagat10:YC3BFab2roTGww0B@cluster0.a4qkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbInstance=new MongoClient(uri)

const db="userAccount"

async function main(){
  await dbInstance.connect();
  const dbCon=dbInstance.db(db);
  const col=dbCon.collection("userAccount");
  const r=await col.insertOne({"name":"bhupen","email":"bhupen@gmail.com","role":"admin"});
  console.log(r);

}
main()



