import {Request, Response} from "express";
import { UserService } from "../services/user.service";
import { ValidateUserSchema } from "./user.schema";


const userService = new UserService();





export const createUser = async (req: Request, res: Response) => { 
    
    const schemaResult=ValidateUserSchema.safeParse(req.body)
    if (!schemaResult.success) {
        return res.status(400).json({ message:schemaResult.error.issues[0].message });
    }
    const newUser = await userService.createUserService(req.body);
    return res.status(201).json({message: "User created successfully", user: newUser}); 
}
