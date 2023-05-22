import app from "./config/server.config";
import { task } from "./job/job_priority";

app.listen(3000 , () => {
   task.start();
   console.log("Serer Runig");
})