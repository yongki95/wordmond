import { model, Schema } from "mongoose";

const wordSchema = new Schema({
    level: Number,
    word: String,
    mean: String
});

module.exports = model('words', wordSchema);