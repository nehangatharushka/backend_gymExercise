import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ExerciseListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    reps: {
        type: String,
        required: true
    },
    set: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }, 
    weight: {
        type: String,
        required: true
    },

});

export default mongoose.model('ExerciseList', ExerciseListSchema)