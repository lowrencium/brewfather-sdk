import { Timestamp } from './misc';

export interface Misc {
  _id: string;
  _version: string;
  _timestamp: Timestamp;
  _created: Timestamp;
  _rev: string;
  _timestamp_ms: number;

  hidden: boolean;
  use: string;
  inventory: number;
  type: string;
  unit: string;
  name: string;
  timeIsDays: boolean;
  waterAdjustment: boolean;
  time: number;
}
