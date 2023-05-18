import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FitnessPlanSchema = new Schema({
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