import { Ref, getModelForClass, prop } from '@typegoose/typegoose';
import { Document } from 'mongoose';

import { Question } from './question';
import { User } from './user';

export class TestHistory extends Document {
  @prop({ required: true, ref: () => User })
  public user!: Ref<User>;

  @prop({ required: true })
  public date!: Date;

  @prop({ required: true })
  public score!: number;

  @prop({ required: true })
  public level!: number;

  @prop({ required: true })
  public language!: string;

  @prop({ required: true, ref: () => Question })
  public questions!: Ref<Question>[];
};

export const TestHistoryModel = getModelForClass(TestHistory);
