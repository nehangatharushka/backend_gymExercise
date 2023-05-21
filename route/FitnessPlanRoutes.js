import express from "express";
import {FitnessPlanList , FitnessPlanListInsert , getFitnessPlan } from '../controller/User/GYM/FitnessPlanController.js';

const FitnessPlanRoutes = express.Router();

FitnessPlanRoutes.get('/fitnessPlan', FitnessPlanList);

FitnessPlanRoutes.post('/fitnessPlanInsert', FitnessPlanListInsert);

FitnessPlanRoutes.post('/getFitnessPlan', getFitnessPlan);


export default FitnessPlanRoutes