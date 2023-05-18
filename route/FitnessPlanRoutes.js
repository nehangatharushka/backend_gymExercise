import express from "express";
import {FitnessPlanList} from '../controller/User/GYM/FitnessPlanController';

const FitnessPlanRoutes = express.Router();

FitnessPlanRoutes.get('/fitnessPlan', FitnessPlanList);

export default FitnessPlanRoutes