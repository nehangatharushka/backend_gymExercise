import express from "express";
import { suggestFitnessPlan } from '../controller/User/UserFitness/UserFitnessController.js';

const UserFitnessRoutes = express.Router();

UserFitnessRoutes.post('/suggestFitnessPlan', suggestFitnessPlan);

export default UserFitnessRoutes