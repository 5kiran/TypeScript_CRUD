/**
 * Required External Modules
 */
import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

/**
 * App Variables
 */

const port : number = Number(process.env.PORT)
const app = express();

/**
 *  App Configuration
 */
app.use(express.json());

/**
 * Server Activation
 */
app.get("/", (req : Request, res : Response) => {
  res.send('Hi!!!')
})

app.listen(port, () => {
  console.log(`Server on port http://localhost:${port}`)
})