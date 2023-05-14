
import cors  from 'cors';
import express  from "express";
import { connectDb } from "../db/mngoseConnect";

//Router
import userRouter from '../router/user.router';
import routerSurvey from '../router/survey.router';

// Server
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//connect db
connectDb().then(() => {console.log("Db is connect")}).catch((error) => {console.log("not connectin SB" , error)});

//Router
app.use("/api", userRouter);
app.use("/api", routerSurvey);


export default app ;