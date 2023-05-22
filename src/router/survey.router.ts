import { Router } from 'express';
import { ControllerSurvey } from '../controller/survey.controller';
import { isAutorizado } from '../middleware/authHandle';


const controller = new ControllerSurvey();

const routerSurvey = Router();

routerSurvey.get('/survey', isAutorizado, controller.findAllSurvey);
routerSurvey.post('/survey', isAutorizado, controller.createSurvey);
routerSurvey.delete('/survey/:id', isAutorizado, controller.deleteSurvey);
routerSurvey.patch('/survey/:id', isAutorizado, controller.updateSurvey);
routerSurvey.put('/surveyIdBoto/:id', isAutorizado, controller.updateIDBoto);
export default routerSurvey;