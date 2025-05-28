import { Timestamp } from './misc';

export interface Yeast {
  _id: string;
  _version: string;
  _rev: string;
  _timestamp: Timestamp;
  _timestamp_ms: number;
  _created: Timestamp;

  attenuation: number;
  bestFor: string;
  hidden: boolean;
  maxTemp: number;
  description: string;
  ageRate: number;
  maxAttenuation: number;
  inventory: number;
  type: string;
  cellsPerPkg: number;
  productId: string;
  minAttenuation: number;
  flocculation: string;
  minTemp: number;
  unit: string;
  form: string;
  laboratory: string;
  name: string;
  maxAbv: number;
  fermentAll: boolean;
  manufacturingDate: number;
  starterSize: number;
  userNotes: string;
  starter: boolean;
  bestBeforeDate: number;
  amount: number;
}
