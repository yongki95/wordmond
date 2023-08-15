import { Document } from 'mongoose';
import { getModelForClass, prop } from '@typegoose/typegoose';

export class words extends Document {
    @prop({ required: true })
    public level!: number;

    @prop({ required: true })
    public eng!: string;

    @prop({ required: true })
    public kor!: string;
};

export const Word = getModelForClass(words);
