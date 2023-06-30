export interface Brewtracker {
  _id: string;
  _rev: string;

  hidden: boolean;
  active: boolean;
  completed: boolean;
  enabled: boolean;
  notify: boolean;
  stage: number;
  stages: Stage[];
  name: string;
  alarm: boolean;
}

interface Stage {
  paused: boolean;
  start?: number;
  type: string;
  steps: Step[];
  duration: number;
  name: string;
  step: number;
  position: number;
}

interface Step {
  description: string;
  type: string;
  priority?: number;
  duration?: number;
  pauseBefore?: boolean;
  name?: string;
  time: number;
  tooltip?: string;
  value?: number;
  final?: boolean;
}
