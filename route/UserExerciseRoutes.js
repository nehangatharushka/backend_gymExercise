import express from "express";
import { UserExreciseInsert , getUserExerciseList , dateChange } from '../controller/User/UserExercise/UserExerciseController.js';

const UserExerciseRoutes = express.Router();

UserExerciseRoutes.post('/inertUserExercise', UserExreciseInsert);

UserExerciseRoutes.post('/getUserExerciseList', getUserExerciseList);

UserExerciseRoutes.put('/changeUserExerciseDate', dateChange);

export default UserExerciseRoutes