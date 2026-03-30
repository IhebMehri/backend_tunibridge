import "reflect-metadata"
import {DataSource} from "typeorm"
import { User } from "../entities/user.entity"
import { Event } from "../entities/event.entity"
import { Institution } from "../entities/institution.entity"
import { Parcours } from "../entities/parcours.entity";


export const AppDataSource = new DataSource({
    type :"postgres",
    host : "localhost",
    port : 5432,
    username : "postgres",
    password : "123",
    database : "tunibridge",
    synchronize : true,
    logging : false,
    entities : [User , Event, Institution, Parcours],
})