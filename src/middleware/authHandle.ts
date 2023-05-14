import { Response, Request, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const isAutorizado = (req: Request, res: Response, next: NextFunction) => {  
    console.log(req.body);
    const headersAuthorization = req.headers["authorization"];
    const toke = String(headersAuthorization?.split(" ")[1]);
    const beare = String(headersAuthorization?.split(" ")[0]);
    if(!toke && beare !== "Bearer"){
      res.status(403).json({ mensaje: "Is not Authorized...." });
    } else{

      try {
         const veriToken = jwt.verify(toke , "asdq312qwecc$$^&**@(W)@www3gbtw2389/)(p222)");
            if(veriToken) next();
            else res.status(400).json({"mess": "Token not valid."});
      } catch (error) {
          res.status(500).json(error);
      }
    }
};