import app from "./config/server.config";
import { task } from "./job/job_priority";

app.listen(3000 , () => {
   // Job start 
   task.start();
   // Start server
   console.log("Serer Runig");
})