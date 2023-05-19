import express from "express";
import {FitnessPlanList , FitnessPlanListInsert} from '../controller/User/GYM/FitnessPlanController.js';

const FitnessPlanRoutes = express.Router();

FitnessPlanRoutes.get('/fitnessPlan', FitnessPlanList);

FitnessPlanRoutes.post('/fitnessPlanInsert', FitnessPlanListInsert);

export default FitnessPlanRoutes