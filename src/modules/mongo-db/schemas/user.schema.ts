import * as mongoose from 'mongoose';
import { UserRecord } from '../../../infrastructure/user-record.infrastructure';

export const UserSchema = new mongoose.Schema({
  login: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  birthday: { type: String, require: true },
  position: { type: String, require: true },
  fullName: { type: String, require: true },
  avatarUrl: { type: String },
});

export type UserDocument = UserRecord & mongoose.Document;
