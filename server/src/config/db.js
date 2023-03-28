import mongoose from "mongoose";
import { DB_URI } from "./env";

export default function DBConnection() {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
    }).then(() => {
        console.log('Succesfully connected to database')
      }).catch((err) => {
        console.log('Database conenction failed. exiting now...')
        console.log(err.stack)
        console.log(err)
        process.exit(1)
      })
}