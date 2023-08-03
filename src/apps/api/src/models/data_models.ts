import mongoose, { Document, Schema } from "mongoose";

export interface bd_word extends Document {
    level: number;
    eng: string;
    kor: string;
}

export const word_schema = new Schema<bd_word>({
    level: { type:Number, required: true },
    eng: { type:String, required: true },
    kor: { type:String, required: true },
});

export const Word = mongoose.model<bd_word>('Word', word_schema);