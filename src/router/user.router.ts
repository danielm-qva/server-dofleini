import { Router } from "express";

import { isAutorizado } from "../middleware/authHandle";
import { ControllerUser } from "../controller/user.controller";


const userRouter = Router();
const controlleruser = new ControllerUser() ;

userRouter.get('/user',isAutorizado, controlleruser.findAllUser);
userRouter.put('/user/:id', isAutorizado ,controlleruser.updateUser);
userRouter.delete('/user/:id',isAutorizado , controlleruser.deleteUser);
userRouter.get('/user/:id' , isAutorizado , controlleruser.findOndeUser);

//login 
 userRouter.post('/login' , controlleruser.loginUser);
userRouter.post('/register' , controlleruser.createUser);

export default userRouter;