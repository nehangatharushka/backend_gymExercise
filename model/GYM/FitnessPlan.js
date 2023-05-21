import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FitnessPlanSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    Protein: {
        type: String,
        required: true
    },
    Carbohydrates: {
        type: String,
        required: true
    },
    Fat: {
        type: String,
        required: true
    }
});

export default mongoose.model('FitnessPlan', FitnessPlanSchema)