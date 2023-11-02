import { Ref, getModelForClass, prop } from '@typegoose/typegoose';
import { Document } from 'mongoose';

import { User } from './user';

export class Auth extends Document {
  @prop({ required: true, unique: true })
  public providerSub!: string;
  
  // provider 코드 내에서 전체 바꾸기
  @prop({ required: true, enum: ['google', 'facebook'] })
  public provider!: string;

  @prop({ required: true, ref: () => User })
  public user!: Ref<User>;
};

export const AuthModel = getModelForClass(Auth);
