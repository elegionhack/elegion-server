import * as mongoose from 'mongoose';
import { UserSchema } from './user.schema';

export const ProjectSchema = new mongoose.Schema({
  title: { type: String, require: true },
  customer: { type: String, require: true },
  description: { type: String, require: true },
  workers: [UserSchema],
  trackerLink: { type: String },
  googleCalendarLink: { type: String },
  telegramLink: { type: String },
});

export type ProjectDocument = ProjectSchema & mongoose.Document;
