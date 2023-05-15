import express from "express";
import { GetUser , LoginUser, RegisterUser} from "../controller/User/UserController.js";

const UserRoutes = express.Router();

UserRoutes.get('/login', GetUser);

UserRoutes.post('/register', RegisterUser);

UserRoutes.post('/loginUser', LoginUser);

export default UserRoutes