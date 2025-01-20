
import { config } from "dotenv"
config()
export const EnvironmentVariables={
  port:process.env.PORT,
  CONNSTRING:process.env.MONGO_CONN,
  AUTHDB:process.env.AUTHDB,
  JWT_SECRET:process.env.JWT_SECRET
}