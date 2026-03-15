import "reflect-metadata"
import {DataSource} from "typeorm"
import { User } from "../entities/user.entity"


export const AppDataSource = new DataSource({
    type :"postgres",
    host : "localhost",
    port : 5432,
    username : "postgres",
    password : "123",
    database : "tunibridge",
    synchronize : true,
    logging : false,
    entities : [User],
})