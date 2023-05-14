import { Router } from 'express';
import { ControllerSurvey } from '../controller/survey.controller';


const controller = new ControllerSurvey();

const routerSurvey = Router();

routerSurvey.get('/survey' , controller.findAllSurvey);
routerSurvey.post('/survey' , controller.createSurvey);
routerSurvey.delete('/survey/:id' , controller.deleteSurvey);

export default routerSurvey;