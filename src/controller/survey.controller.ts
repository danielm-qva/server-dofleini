
import { Request, Response  } from "express";
import surveyModel from "../model/survey.model";

export class ControllerSurvey {

  findAllSurvey = async (req: Request, res: Response) => {
    const listSurvey = await surveyModel.find();
       res.status(200).json(listSurvey);
  };

  createSurvey = async (req: Request, res: Response) => {
    const { question } = req.body;
    try {
        const createSurvey = await surveyModel.create({question}).then().catch((error) => {
          res.status(400).json({"Error" : error.errors});
        })
        return res.status(200).json({createSurvey});
    
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  deleteSurvey = async (req: Request, res: Response) => {
    const id = req.params['id'];
    try {
           const delteDrone =  await surveyModel.findByIdAndRemove(id);
           if(delteDrone){
                  res.status(200).json(delteDrone);
               }
    } catch (error) {
           res.status(400).json({error});
    }
  };

  updateSurvey = async (req: Request, res: Response) => {
    const id = req.params['id'];
       const surveyUpdate =  await surveyModel.findByIdAndUpdate(id , req.body , {new : true , upsert: true});
        if(surveyUpdate){
               res.status(200).json({surveyUpdate});
        }
        else{
              res.status(400).json({"mensaje" : "Not fount"});
        }
  }
    
   updateIDBoto = async (req: Request, res: Response) => {
    const id = req.params['id'];
    const {idUser}  = req.body;
    const finSurvey = await surveyModel.findById(id);
         if(finSurvey){
              finSurvey.idBotosUser.push(idUser);
               const newSurvey = await surveyModel.findByIdAndUpdate(id, finSurvey , {new : true , upsert: true});
               console.log(newSurvey);
                  res.status(200).json();
         }
         else{
          res.status(400).json({"mensaje" : "Not foun"});
         }
   }


}