import dotenv from "dotenv";
dotenv.config();

import parcoursRoutes from "./routes/parcours.route";
import institutionRoutes from "./routes/institution.route";
import eventRoutes from "./routes/event.route";
import express from 'express';
import userRoutes from './routes/user.route';
import { AppDataSource } from './config/data-source';
import { authMiddleware } from "./middlewares/auth.middleware";






const app = express();
app.use (express.json());
const PORT :number = 5000;



app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes,);
app.use("/events", eventRoutes);
app.use("/institutions", institutionRoutes);
app.use("/parcours", authMiddleware,parcoursRoutes);


AppDataSource.initialize().then(()=>{
  console.log("DataBase connected ")
}).catch((error)=>{console.log("Erreur DB",error)})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});