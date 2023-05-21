import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserExerciseSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    url: {
        type: String
    },
    reps: {
        type: String
    },
    set: {
        type: String
    },
    time: {
        type: String
    }, 
    weight: {
        type: String
    },
    completed: {
        type: String
    },
    date: {
        type: String
    },
    type: {
        type: String
    }

});

export default mongoose.model('UserExercise', UserExerciseSchema)