import { Repository } from "typeorm";
import { CreateUser, IUser } from "../interfaces/user.interface";

import { User  } from "../entities/user.entity"
import { AppDataSource } from "../config/data-source";

export class UserService{

    private userRepository : Repository<User>
constructor(){
    this.userRepository=AppDataSource.getRepository(User)
}







async createUserService(data: CreateUser): Promise <User> {
    const newUser: IUser = this.userRepository.create(data)
    const userSaved = await this.userRepository.save(newUser)
    
    return userSaved;
}



}
