import { getModelForClass, prop } from '@typegoose/typegoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

export class User extends Document {
  @prop({ required: true, unique: true })
  public email!: string;
  
  @prop({ required: true })
  public password!: string;

  @prop({ default: uuidv4 })
  public token?: string;

  public async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  };

  public async comparePassword(userPassword: string): Promise<boolean> {
    return bcrypt.compare(userPassword, this.password);
  };
};

export const UserModel = getModelForClass(User);
