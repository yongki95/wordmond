import { Document } from 'mongoose';
import { Ref, getModelForClass, prop } from '@typegoose/typegoose';
import { v4 as uuidv4 } from 'uuid';
import { History } from './History';

export class User extends Document {
  @prop({ required: true, unique: true })
  public userName!: string;
  
  @prop({ required: true })
  public password!: string;

  @prop({ required: true })
  public email!: string;

  @prop({ default: uuidv4})
  authorizedID!: string;

};

export const UserModel = getModelForClass(User);
