import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CompletedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
});

export default mongoose.model('CompletedSchema', CompletedSchema)