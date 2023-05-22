import bycrypt  from 'bcrypt';
import { Request, Response } from "express";
import User from "../model/user.model";

import { JsonWebTokenGenerate } from "../utils/JsonWebTokenGenertate";
import {hashPassword} from "../utils/hashPassword";


export class ControllerUser {
  constructor() { }

  findAllUser = async (req: Request, res: Response) => {
    const listUser = await User.find();
    return res.status(200).json(listUser);
  };

  // findOndeUser = (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   try {
  //     this.usecase
  //       .findAUserById(-id)
  //       .then((item) => {
  //         return res.status(200).json(item);
  //       })
  //       .catch((error) => {
  //         return res.status(400).json(error);
  //       });
  //   } catch (error) {
  //     return res.status(500).json(error);
  //   }
  // };

  createUser = async (req: Request, res: Response) => {
    const { username, fullname, password } = req.body;
     const haspassword =   await hashPassword(password);
    try {
      const newUser = await User.create({ username, fullname, password: haspassword }).then().catch((error) => {
        res.status(400).json({ "Error": error });
      })
      return res.status(200).json(newUser);

    } catch (error) {
      return res.status(500).json(error);
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    const id = req.params['id'];
    try {
      const delteDrone = await User.findByIdAndRemove(id);
      if (delteDrone) {
        res.status(200).json(delteDrone);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const id = req.params['id'];
    const droneupdate = await User.findByIdAndUpdate(id, req.body, { new: true, upsert: true });
    if (droneupdate) {
      res.status(200).json({ droneupdate });
    }
    else {
      res.status(400).json({ "mensaje": "Not fount" });
    }
  };

  loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log(req.body);
    const foundUser = await User.findOne({ username });
    if (foundUser) {
       bycrypt.compare(password , foundUser.password!).then((ans) => {
              if(ans){
                const jsonwebtoken = new JsonWebTokenGenerate(foundUser.username!, foundUser.fullname!);
                return res.status(200).json({ "toke": jsonwebtoken.GenereateToken(),  foundUser  });
              }
              else{
                res.status(404).json({ 'mensg': "Ha ocurrido un Error 😢" });
              }
        }).catch(error => {
          res.status(500).json(error);
        })
    }
    else {
      res.status(404).json({ 'mensg': "Ha ocurrido un Error 😢" });
    }  
  }
}
