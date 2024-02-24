import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ isRequired: true })
  fullName: string;

  @Prop({ isRequired: true, unique: true })
  email: string;

  @Prop()
  hash: string;

  @Prop({ isRequired: true })
  phoneNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
