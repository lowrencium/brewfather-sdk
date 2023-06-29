import { Timestamp } from './misc';

export interface Fermentable {
  _id: string;
  _rev: string;
  _timestamp: Timestamp;
  _timestamp_ms: number;
  _created: Timestamp;
  _version: string;

  attenuation: number;
  notes: string;
  hidden: boolean;
  color: number;
  use: string;
  grainCategory: string;
  origin: string;
  inventory: number;
  type: string;
  supplier: string;
  protein: number;
  diastaticPower: number;
  potentialPercentage: number;
  costPerAmount: number;
  potential: number;
  lovibond: number;
  amount: number;
  substitutes: string;
  usedIn: string;
  bestBeforeDate: number;
  notFermentable: boolean;
  moisture: number;
  name: string;
  manufacturingDate: number;
  userNotes: string;
}
