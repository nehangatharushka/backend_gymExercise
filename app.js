import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRoutes from "./route/UserRoutes.js";
import FitnessPlanRoutes from "./route/FitnessPlanRoutes.js";
import UserFitnessRoutes from "./route/UserFitnessRoutes.js";
import ExerciseListRoutes from "./route/ExerciseListRoutes.js";
import UserExerciseRoutes from "./route/UserExerciseRoutes.js";
import CompletedRoutes from "./route/CompletedRoutes.js";

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type');
    // res.header('Content-Type', 'application/json');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use('/user',UserRoutes)

app.use('/gym',FitnessPlanRoutes)

app.use('/userFitnessPlan',UserFitnessRoutes)

app.use('/exercise',ExerciseListRoutes)

app.use('/userExercise',UserExerciseRoutes)

app.use('/completed',CompletedRoutes)

mongoose.connect("mongodb://localhost:27017/holiday_central").then(result => {
    app.listen(8080);
}).catch(err => {
    console.log(err)
})

