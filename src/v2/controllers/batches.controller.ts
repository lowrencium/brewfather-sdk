import { AxiosInstance } from 'axios';
import { Batch, BatchStatus, Brewtracker } from '../models';
import { Apply } from '../../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin, Update, UpdateMixin } from '../mixins';
import { GetAllOptions } from '../types';

type GetBatchesOptions = GetAllOptions<Batch> & {
  status?: BatchStatus;
};

type IncompleteBatch = Pick<Batch, '_id' | 'batchNo' | 'brewDate' | 'brewer' | 'name' | 'recipe' | 'status'>;

type UpdateBatchParams = {
  status: BatchStatus;

  /**
   * Numeric value between 0 and 14
   */
  measuredMashPh: number;

  /**
   * Pre-Boil volume, in liters
   */
  measuredBoilSize: number;

  /**
   * Pre-Sparge gravity, in SG
   * @example 1.055
   */
  measuredFirstWortGravity: number;

  /**
   * Pre-Boil gravity, in SG
   * @example 1.055
   */
  measuredPreBoilGravity: number;

  /**
   * Post-Boil gravity, in SG
   * @example 1.055
   */
  measuredPostBoilGravity: number;

  /**
   * Post-Boild volume, in liters
   */
  measuredKettleSize: number;

  /**
   * Original gravity, in SG
   * @example 1.055
   */
  measuredOg: number;

  /**
   * Final gravity, in SG
   * @example 1.011
   */
  measuredFg: number;

  /**
   * Fermenter Top-Up, in liters
   */
  measuredFermenterTopUp: number;

  /**
   * Fermenter volume, in liters
   */
  measuredBatchSize: number;

  /**
   * Final bottling/kegging volume, in liters
   */
  measuredBottlingSize: number;

  /**
   * Value in Celcius (°C)
   * Min -50°C
   * Max 100°C
   */
  carbonationTemp: number;
};

export class BatchesController extends Apply<
  GetAll<Batch, IncompleteBatch, GetBatchesOptions>,
  GetById<Batch, IncompleteBatch>,
  Update<Batch, UpdateBatchParams>
>(GetAllMixin, GetByIdMixin, UpdateMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/batches');
  }

  getBrewtracker(id: string): Promise<Brewtracker> {
    return new Promise((resolve, reject) => {
      this.axios
        .get(`${this.route}/${id}/brewtracker`)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch(reject);
    });
  }

  getAllReadings(id: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.axios
        .get(`${this.route}/${id}/readings`)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch(reject);
    });
  }

  getLastReading(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axios
        .get(`${this.route}/${id}/readings/last`)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch(reject);
    });
  }
}
