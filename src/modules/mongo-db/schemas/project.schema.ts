import * as mongoose from 'mongoose';
import { ProjectContent } from '../../../models/interfaces/project-content.interface';

export const ProjectSchema = new mongoose.Schema({
  title: { type: String, require: true },
  customer: { type: String, require: true },
  description: { type: String, require: true },
  workers: { type: [String], default: [], unique: false },
  trackerLink: { type: String },
  googleCalendarLink: { type: String },
  telegramLink: { type: String },
  photo: { type: String },
});

export type ProjectDocument = ProjectContent & mongoose.Document;
