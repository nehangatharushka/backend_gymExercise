import express from "express";
import { GetUser , LoginUser, RegisterUser , SaveFitnessPlan , SaveUserInfo , SaveDateTime} from "../controller/User/UserController.js";

const UserRoutes = express.Router();

UserRoutes.post('/getUser', GetUser);

UserRoutes.post('/register', RegisterUser);

UserRoutes.post('/loginUser', LoginUser);

UserRoutes.post('/update', SaveUserInfo);

UserRoutes.post('/SaveFitnessplan', SaveFitnessPlan);

UserRoutes.post('/SaveDateTime', SaveDateTime);

export default UserRoutes