// import mongoose, { Document, Schema } from 'mongoose';

// export interface Word extends Document {
//     level: number;
//     eng: string;
//     kor: string;
// };

// export const wordSchema = new Schema<Word>({
//     level: { type:Number, required: true },
//     eng: { type:String, required: true },
//     kor: { type:String, required: true },
// });

// export const Word = mongoose.model<Word>('Word', wordSchema);

import { prop, getModelForClass } from '@typegoose/typegoose';
import { Document } from 'mongoose';

export class words extends Document {
    @prop({ required: true })
    public level!: number;

    @prop({ required: true })
    public eng!: string;

    @prop({ required: true })
    public kor!: string;
};

export const Word = getModelForClass(words);
