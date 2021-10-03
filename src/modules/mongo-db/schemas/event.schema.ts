import * as mongoose from 'mongoose';
import { EventContent } from '../../../models/interfaces/event-content.interface';

export const EventSchema = new mongoose.Schema({
  type: { type: String },
  title: { type: String },
  bonus: { type: Number },
  description: { type: String },
  participantsList: [String],
  imgUrl: { type: String },
  date: { type: String },
});

export type EventDocument = EventContent & mongoose.Document;
