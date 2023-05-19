import express from "express";
import { GetUser , LoginUser, RegisterUser , SaveFitnessPlan} from "../controller/User/UserController.js";

const UserRoutes = express.Router();

UserRoutes.get('/login', GetUser);

UserRoutes.post('/register', RegisterUser);

UserRoutes.post('/loginUser', LoginUser);

UserRoutes.post('/SaveFitnessplan', SaveFitnessPlan);

export default UserRoutes