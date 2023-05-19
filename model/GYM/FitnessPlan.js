import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FitnessPlanSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    nutrition: {
        type: String,
        required: true
    },
    exercise: {
        type: String,
        required: true
    }
});

export default mongoose.model('FitnessPlan', FitnessPlanSchema)