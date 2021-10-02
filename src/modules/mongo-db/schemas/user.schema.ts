import * as mongoose from 'mongoose';
import { UserContent } from '../../../models/interfaces/user-content.interface';

export const UserSchema = new mongoose.Schema({
  login: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  birthday: { type: String, require: true },
  position: { type: String, require: true },
  fullName: { type: String, require: true },
  roles: [{ type: String, require: true }],
  avatarUrl: { type: String },
});

export type UserDocument = UserContent & mongoose.Document;
