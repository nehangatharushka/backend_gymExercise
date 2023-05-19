import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserFitnessPlanSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

export default mongoose.model('UserFitnessPlan', UserFitnessPlanSchema)