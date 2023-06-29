import { Fermentable } from './fermentable.model';
import { Hop } from './hop.model';
import { Timestamp } from './misc';
import { Style } from './style.model';
import { Misc } from './misc.model';
import { Yeast } from './yeast.model';

export type BatchStatus =
  | 'Planning'
  | 'Brewing'
  | 'Fermenting'
  | 'Conditioning'
  | 'Completed'
  | 'Archived';

export interface Batch {
  batchNo: number;
  devices: Devices;
  fermentationStartDate: number;
  brewDate: number;
  bottlingDate: number;
  name: string;
  _archived: boolean;
  _id: string;
  brewer: any;
  _init: boolean;
  primingSugarEquiv: number;
  hidden: boolean;
  estimatedColor: number;
  measuredConversionEfficiency: any;
  measuredKettleEfficiency: number;
  estimatedIbu: number;
  measurements: any[];
  cost: Cost;
  _type: string;
  boilStepsCount: number;
  brewControllerEnabled: boolean;
  fermentationControllerEnabled: boolean;
  carbonationForce: any;
  _created: Timestamp;
  carbonationType: string;
  measuredMashEfficiency: number;
  mashStepsCount: number;
  estimatedOg: number;
  measuredAbv: number;
  estimatedRbRatio: number;
  estimatedTotalGravity: number;
  measuredAttenuation: number;
  estimatedFg: number;
  measuredEfficiency: number;
  estimatedBuGuRatio: number;
  measuredOg: number;
  tasteRating: any;
  notes: Note[];
  status: BatchStatus;
  boilSteps: BoilStep[];
  hideBatchEvents: boolean;
  _rev: string;
  recipe: Recipe;
  _timestamp_ms: number;
  _timestamp: Timestamp;
  _version: string;
  events: Event[];
}

interface Devices {
  myBrewbot: MyBrewbot;
  floatHydrometer: FloatHydrometer;
  tilt: Tilt;
  gfcc: Gfcc;
  smartPid: SmartPid;
  stream: Stream;
  brewPiLess: BrewPiLess;
  floatyHydrometer: FloatyHydrometer;
  iSpindel: ISpindel;
  plaatoKeg: PlaatoKeg;
  plaatoAirlock: PlaatoAirlock;
}

interface MyBrewbot {
  enabled: boolean;
  items: any[];
}

interface FloatHydrometer {
  enabled: boolean;
  items: any[];
}

interface Tilt {
  temp: boolean;
  enabled: boolean;
  mode: string;
  gravity: boolean;
  items: any[];
}

interface Gfcc {
  brewDeviceId: any;
  enabled: boolean;
  items: any[];
}

interface SmartPid {
  brewDeviceId: any;
  enabled: boolean;
  items: any[];
}

interface Stream {
  enabled: boolean;
  items: any[];
}

interface BrewPiLess {
  enabled: boolean;
  items: any[];
}

interface FloatyHydrometer {
  enabled: boolean;
  items: any[];
}

interface ISpindel {
  enabled: boolean;
  items: any[];
}

interface PlaatoKeg {
  enabled: boolean;
  items: any[];
}

interface PlaatoAirlock {
  enabled: boolean;
  items: any[];
}

interface Cost {
  perBottlingLiter: number;
  yeasts: number;
  total: number;
  fermentablesShare: number;
  miscs: number;
  hops: number;
  yeastsShare: number;
  hopsShare: number;
  fermentables: number;
  miscsShare: number;
}

interface Note {
  note: string;
  type: string;
  status: string;
  timestamp: number;
}

interface BoilStep {
  name: string;
  time: number;
}

interface Recipe {
  _init: boolean;
  data: Data;
  sumDryHopPerLiter: number;
  fgEstimated: number;
  yeasts: Yeast[];
  type: string;
  yeastToleranceExceededBy: any;
  path: string;
  styleAbv: boolean;
  avgWeightedHopstandTemp: number;
  diastaticPower: number;
  ogPlato: number;
  preBoilGravity: number;
  boilSize: number;
  _version: string;
  fermentables: Fermentable[];
  _timestamp: Timestamp;
  styleIbu: boolean;
  efficiency: number;
  fermentablesTotalAmount: number;
  buGuRatio: number;
  _public: boolean;
  author: string;
  totalGravity: number;
  equipment: Equipment;
  _timestamp_ms: number;
  water: Water;
  hopStandMinutes: number;
  yeast: Yeast;
  carbonation: number;
  carbonationStyle: CarbonationStyle;
  tags: any;
  nutrition: Nutrition;
  defaults: Defaults;
  miscs: Misc[];
  name: string;
  fermentation: Fermentation;
  style: Style;
  firstWortGravity: any;
  _id: string;
  fermentableIbu: number;
  primaryTemp: number;
  fg: number;
  attenuation: number;
  color: number;
  hidden: boolean;
  styleRbr: boolean;
  searchTags: string[];
  _rev: string;
  rbRatio: number;
  styleCarb: boolean;
  fgFormula: string;
  boilTime: number;
  _ev: number;
  extraGravity: number;
  styleOg: boolean;
  public: boolean;
  mashEfficiency: number;
  styleConformity: boolean;
  og: number;
  ibuFormula: string;
  mash: Mash2;
  styleBuGu: boolean;
  _type: string;
  styleFg: boolean;
  postBoilGravity: number;
  abv: number;
  hopsTotalAmount: number;
  _created: Timestamp;
  hops: Hop[];
  batchSize: number;
  ibu: number;
  teaser: string;
  styleColor: boolean;
}

interface Data {
  mashWaterAmount: number;
  otherFermentablesAmount: number;
  otherFermentables: any[];
  mashFermentablesAmount: number;
  strikeTemp: any;
  mashFermentables: Fermentable[];
  batchSpargeWaterAmount4: any;
  batchSpargeWaterAmount3: any;
  batchSpargeWaterAmount2: any;
  batchSpargeWaterAmount1: any;
  mashVolume: number;
  totalDiastaticPower: number;
  hopsAmount: number;
  hltWaterAmount: number;
  totalWaterAmount: number;
  topUpWater: number;
  spargeWaterAmount: number;
  mashVolumeSurplus: number;
  allDiastaticPower: boolean;
}

interface Equipment {
  mashWaterVolumeLimitEnabled: boolean;
  waterCalculation: string;
  hidden: boolean;
  fermenterVolumeBeforeTopUp: number;
  efficiencyType: string;
  fermenterLossEstimate: number;
  calcStrikeWaterTemperature: boolean;
  _rev: string;
  _meta: Meta;
  hopstandTemperature: number;
  hopUtilization: number;
  mashWaterMin: number;
  grainAbsorptionRate: number;
  boilTime: number;
  waterGrainRatio: number;
  mashEfficiency: number;
  mashWaterMax: number;
  evaporationRate: number;
  mashTunDeadSpace: number;
  _timestamp: Timestamp;
  boilSize: number;
  _version: string;
  fermenterLoss: number;
  mashWaterFormula: string;
  efficiency: number;
  spargeWaterOverflow: string;
  spargeWaterMin: number;
  calcAromaHopUtilization: boolean;
  bottlingVolume: number;
  calcBoilVolume: boolean;
  _timestamp_ms: number;
  aromaHopUtilization: number;
  ambientTemperature: any;
  boilOffPerHr: number;
  trubChillerLoss: number;
  brewhouseEfficiency: number;
  postBoilKettleVol: number;
  spargeWaterFormula: string;
  _created: Timestamp;
  spargeWaterMax: any;
  name: string;
  fermenterVolume: number;
  _id: string;
  batchSize: number;
  calcMashEfficiency: boolean;
}

interface Meta {
  efficiencyIsCalculated: boolean;
  mashEfficiencyIsCalculated: boolean;
}

interface Water {
  diluted: any;
  spargeWaterPh: number;
  source: WaterProfile;
  enableAcidAdjustments: boolean;
  mashPh: number;
  mashPhDistilled: number;
  total: WaterProfile;
  totalTargetDiff: TargetDiff;
  mash: Mash;
  spargeWaterAmount: any;
  enableSpargeAdjustments: boolean;
  settings: Settings;
  mashWaterAmount: any;
  totalAdjustments: TotalAdjustments;
  spargeTargetDiff: TargetDiff;
  spargeAcidPhAdjustment: number;
  sourceTargetDiff: TargetDiff;
  mashTargetDiff: TargetDiff;
  target: Target;
  spargeWaterTargetPh: number;
  mashAdjustments: MashAdjustments;
  enableSpargeAcidAdjustments: boolean;
  meta: Meta2;
  acidPhAdjustment: number;
  sparge: Sparge;
  style: string;
  dilutionPercentage: any;
  spargeAdjustments: SpargeAdjustments;
}

interface WaterProfile {
  residualAlkalinityMeqLCalc: number;
  sulfate: number;
  hidden: boolean;
  _rev: string;
  type: string;
  residualAlkalinity: number;
  chloride: number;
  bicarbonate: number;
  anions: number;
  _version: string;
  _timestamp: Timestamp;
  cations: number;
  ionBalanceOff: boolean;
  calcium: number;
  bicarbonateMeqL: number;
  magnesium: number;
  _timestamp_ms: number;
  alkalinity: number;
  sodium: number;
  hardness: number;
  _created: Timestamp;
  ph: number;
  soClRatio: number;
  name: string;
  ionBalance: number;
  _id: string;
}

interface Mash {
  residualAlkalinityMeqLCalc: number;
  sulfate: number;
  hidden: boolean;
  _rev: string;
  type: string;
  residualAlkalinity: number;
  chloride: number;
  bicarbonate: number;
  _timestamp: Timestamp;
  _version: string;
  anions: number;
  cations: number;
  ionBalanceOff: boolean;
  calcium: number;
  bicarbonateMeqL: number;
  magnesium: number;
  _timestamp_ms: number;
  alkalinity: number;
  sodium: number;
  hardness: number;
  _created: Timestamp;
  soClRatio: number;
  ph: number;
  name: string;
  ionBalance: number;
  _id: string;
}

interface Settings {
  sodiumBicarbonate: AdjunctSettings;
  calciumSulfate: AdjunctSettings;
  magnesiumSulfate: AdjunctSettings;
  adjustSparge: boolean;
  magnesiumChloride: AdjunctSettings;
  calciumChloride: AdjunctSettings;
  calciumHydroxide: AdjunctSettings;
}

interface AdjunctSettings {
  auto: boolean;
  sparge: boolean;
  mash: boolean;
}

interface TotalAdjustments {
  ltDWB: number;
  sulfate: number;
  calcium: number;
  calciumCarbonate: number;
  magnesium: number;
  sodiumBicarbonate: number;
  calciumSulfate: number;
  volume: number;
  magnesiumSulfate: number;
  sodium: number;
  sodiumChloride: number;
  sodiumMetabisulfitePPM: number;
  ltAMS: number;
  magnesiumChloride: number;
  chloride: number;
  bicarbonate: number;
  calciumChloride: number;
  sodiumMetabisulfite: number;
  calciumHydroxide: number;
}

interface TargetDiff {
  residualAlkalinityMeqLCalc: number;
  cations: number;
  ionBalanceOff: boolean;
  sulfate: number;
  calcium: number;
  bicarbonateMeqL: number;
  magnesium: number;
  alkalinity: number;
  sodium: number;
  hardness: number;
  residualAlkalinity: number;
  soClRatio: number;
  chloride: number;
  ionBalance: number;
  bicarbonate: number;
  anions: number;
}

interface Target {
  residualAlkalinityMeqLCalc: number;
  ionBalanceOff: boolean;
  cations: number;
  calcium: number;
  sulfate: number;
  bicarbonateMeqL: number;
  magnesium: number;
  description: string;
  type: string;
  alkalinity: number;
  hardness: number;
  sodium: number;
  residualAlkalinity: number;
  name: string;
  soClRatio: number;
  ionBalance: number;
  chloride: number;
  _id: string;
  bicarbonate: number;
  anions: number;
}

interface MashAdjustments {
  ltDWB: number;
  calcium: number;
  sulfate: number;
  calciumCarbonate: number;
  magnesium: number;
  sodiumBicarbonate: number;
  calciumSulfate: number;
  magnesiumSulfate: number;
  volume: number;
  sodium: number;
  sodiumChloride: number;
  acids: Acid[];
  sodiumMetabisulfitePPM: number;
  magnesiumChloride: number;
  ltAMS: number;
  chloride: number;
  bicarbonate: number;
  calciumChloride: number;
  sodiumMetabisulfite: number;
  calciumHydroxide: number;
}

interface Acid {
  amount: number;
  alkalinityMeqL: number;
  concentration: number;
  type: string;
}

interface Meta2 {
  equalSourceTotal: boolean;
}

interface Sparge {
  residualAlkalinityMeqLCalc: number;
  sulfate: number;
  hidden: boolean;
  _rev: string;
  type: string;
  residualAlkalinity: number;
  chloride: number;
  bicarbonate: number;
  _version: string;
  anions: number;
  _timestamp: Timestamp;
  cations: number;
  ionBalanceOff: boolean;
  calcium: number;
  bicarbonateMeqL: number;
  magnesium: number;
  _timestamp_ms: number;
  alkalinity: number;
  hardness: number;
  sodium: number;
  _created: Timestamp;
  name: string;
  soClRatio: number;
  ph: number;
  ionBalance: number;
  _id: string;
}

interface SpargeAdjustments {
  ltDWB: number;
  sulfate: number;
  calcium: number;
  calciumCarbonate: number;
  magnesium: number;
  sodiumBicarbonate: number;
  calciumSulfate: number;
  volume: number;
  magnesiumSulfate: number;
  sodium: number;
  sodiumChloride: number;
  acids: Acid2[];
  sodiumMetabisulfitePPM: number;
  magnesiumChloride: number;
  ltAMS: number;
  chloride: number;
  bicarbonate: number;
  sodiumMetabisulfite: number;
  calciumChloride: number;
  calciumHydroxide: number;
}

interface Acid2 {
  amount: number;
  concentration: number;
  type: string;
}

interface Step {
  startCells: number;
  starterGramLiquidExtract: number;
  startVol: number;
  starterPitchRate: number;
  starterPitchCellCount: number;
  growthFactor: number;
  starterMillionCellsPerMl: number;
  starterNewCellCount: number;
  inoculationRate: number;
  starterGramExtract: number;
  startGravity: number;
  harvestRatio: any;
}

interface CarbonationStyle {
  carbMin: number;
  carbMax: number;
  name: string;
  _id: string;
}

interface Nutrition {
  carbs: Carbs;
  calories: Calories;
}

interface Carbs {
  total: number;
}

interface Calories {
  alcohol: number;
  carbs: number;
  total: number;
  kJ: number;
}

interface Defaults {
  altitude: string;
  temp: string;
  attenuation: string;
  color: string;
  hop: string;
  weight: string;
  pressure: string;
  carbonation: string;
  volume: string;
  abv: string;
  gravity: string;
  grainColor: string;
  ibu: string;
  preferred: string;
}

interface Fermentation {
  steps: Step2[];
  name: string;
  _id: string;
}

interface Step2 {
  stepTemp: number;
  type: string;
  actualTime: number;
  stepTime: number;
}

interface Mash2 {
  steps: Step3[];
  name: string;
  _id: string;
}

interface Step3 {
  stepTemp: number;
  rampTime: any;
  displayStepTemp: number;
  type: string;
  name: string;
  stepTime: number;
}

interface Event {
  notifyTime?: number;
  description: string;
  active: boolean;
  eventType: string;
  title: string;
  dayEvent: boolean;
  eventText?: string;
  descriptionHTML: string;
  time: number;
}
