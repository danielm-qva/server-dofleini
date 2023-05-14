import mongoose from 'mongoose';

mongoose.set('strictQuery' , false);
import 'dotenv/config'

const {MONGO_DB_URL }  = process.env;

export const connectDb = () => {
  return  mongoose.connect(MONGO_DB_URL + 'project', {});
}