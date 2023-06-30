import { AxiosInstance } from 'axios';
import { Batch, BatchStatus, Brewtracker } from '../models';
import { Apply } from '../../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin, Update, UpdateMixin } from '../mixins';
import { GetAllOptions } from '../types';

type GetBatchesOptions = GetAllOptions & {
  status: BatchStatus;
};

type IncompleteBatch = Pick<Batch, '_id' | 'batchNo' | 'brewDate' | 'brewer' | 'name' | 'recipe' | 'status'>;

type UpdateBatchParams = {
  status: BatchStatus;
  measuredBatchPh: number;
  measuredBoilSize: number;
  measuredFirstWortGravity: number;
  measuredPreBoilGravity: number;
  measuredPostBoilGravity: number;
  measuredKettleSize: number;
  measuredOg: number;
  measuredFg: number;
  measuredFermenterTopUp: number;
  measuredBatchSize: number;
  measuredBottlingSize: number;
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
