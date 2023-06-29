import { Timestamp } from './misc';

export interface Hop {
  _id: string;
  _version: string;
  _timestamp: Timestamp;
  _timestamp_ms: number;
  _created: Timestamp;
  _rev: string;

  notes: string;
  hidden: boolean;
  year: null;
  use: string;
  origin: string;
  usage: string;
  inventory: number;
  type: string;
  alpha: number;
  costPerAmount: number;
  amount: number;
  temp: number;
  substitutes: string;
  bestBeforeDate: number;
  usedIn: string;
  name: string;
  manufacturingDate: number;
  time: number;
  userNotes: string;
  ibu: number;
}
