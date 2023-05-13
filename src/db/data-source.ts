import {DataSource} from 'typeorm'
import User from '../auth/domain/user.model';
import { Post } from '../post/domain/post.model';
import {Commentes} from '../comment/domain/comment.model';

import 'dotenv/config';

  var  AppDataSource =  new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    username: "",
    password: "",
    database: 'db_project',
    entities:[],
    synchronize: true,
  })


 export const dbconnet =  AppDataSource.initialize().then(() => {
     console.log("db Runing");
}).catch((error: any) => {
    console.log(error);
})

export default AppDataSource;