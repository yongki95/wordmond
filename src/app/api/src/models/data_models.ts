import mongoose, { Document, Schema } from "mongoose";

export interface DBWord extends Document {
    level: number;
    eng: string;
    kor: string;
}

export const wordSchema = new Schema<DBWord>({
    level: { type:Number, required: true },
    eng: { type:String, required: true },
    kor: { type:String, required: true },
});

export const Word = mongoose.model<DBWord>('Word', wordSchema);