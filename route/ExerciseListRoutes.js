import express from "express";
import { getList , insert , OneExercise } from '../controller/User/GYM/ExerciseListController.js';

const ExerciseListRoutes = express.Router();

ExerciseListRoutes.get('/getList', getList);

ExerciseListRoutes.post('/SelectExercise', OneExercise );

ExerciseListRoutes.post('/insertList', insert );

export default ExerciseListRoutes