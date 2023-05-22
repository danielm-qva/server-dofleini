import cron from 'node-cron';
import surveyModel from '../model/survey.model';
import  moment from 'moment';


export const task = cron.schedule('30 * * * * *' , async () => {
    const day1 = moment();
     const listSurvet =  await surveyModel.find();
           listSurvet.map( async item => {
            const day2 = moment(item.createdAt);
            const dif = day1.diff(day2, "days");
            console.log(item);

            if(dif == 1){
          await surveyModel.findByIdAndUpdate(item.id , {'priority' : 'Media'});
            } else if(dif >= 2) {
                await surveyModel.findByIdAndUpdate(item.id , {'priority' : 'Low'});
            }
        })
} )