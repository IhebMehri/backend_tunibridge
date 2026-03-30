import { authMiddleware } from "../middlewares/auth.middleware";
import {Router} from "express";
import { createUser, deleteUser, getUserById, getUsers, signIn, updateUser } from "../controllers/user.controller";




// Generation JWT token for password 
// Creation table Event Institution et parcours (controllers, services et routes)


const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", authMiddleware, deleteUser);
router.post("/signin", signIn);


export default router;