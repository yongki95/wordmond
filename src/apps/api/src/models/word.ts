import { getModelForClass, prop } from '@typegoose/typegoose';
import { Document } from 'mongoose';

export class Word extends Document {
  @prop({ required: true })
  public level!: number;

  @prop({ required: true })
  public eng!: string;

  @prop({ required: true })
  public kor!: string;
};

export const WordModel = getModelForClass(Word);


