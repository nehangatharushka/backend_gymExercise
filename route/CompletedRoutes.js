import express from "express";
import { Insertcompleted , GetCompleted } from '../controller/User/Completed/CompletedController.js';

const CompletedRoutes = express.Router();

CompletedRoutes.post('/insertCompleted', Insertcompleted );

CompletedRoutes.post('/getCompleted', GetCompleted );

export default CompletedRoutes