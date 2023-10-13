import { getModelForClass, prop } from '@typegoose/typegoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export class User extends Document {
  @prop({ required: true, unique: true })
  public email!: string;
  
  @prop({ required: true })
  public password!: string;

  @prop({ default: uuidv4 })
  public token?: string;
};

export const UserModel = getModelForClass(User);
