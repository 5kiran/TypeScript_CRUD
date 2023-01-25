/**
 * Required External Modules
 */
import dotenv from "dotenv";
import express from "express";
dotenv.config();
/**
 * App Variables
 */
const port = Number(process.env.PORT);
const app = express();
/**
 *  App Configuration
 */
app.use(express.json());
/**
 * Server Activation
 */
app.get("/", (req, res) => {
    res.send('Hi!!!');
});
app.listen(port, () => {
    console.log(`Server on port http://localhost:${port}`);
});
