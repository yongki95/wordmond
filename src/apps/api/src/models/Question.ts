import { prop, getModelForClass } from '@typegoose/typegoose';
import { Document } from 'mongoose';

export class Question extends Document {
  @prop({ required: true })
  public word!: string;

  @prop({ required: true})
  public answer!: string;

  @prop({ required: true})
  public choices!: string[];

  @prop({ required: true})
  public userAnswer!: string;
}

export const QuestionModel = getModelForClass(Question);