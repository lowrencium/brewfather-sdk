import { AxiosInstance } from 'axios';
import { Batch, BatchStatus } from './models';
import { Apply } from '../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin } from './mixins';
import { GetAllOptions } from './types';

type GetBatchesOptions = GetAllOptions & {
  status: BatchStatus;
};

type IncompleteBatch = Pick<Batch, '_id' | 'batchNo' | 'brewDate' | 'brewer' | 'name' | 'recipe' | 'status'>;

export default class extends Apply<GetAll<Batch, IncompleteBatch, GetBatchesOptions>, GetById<Batch, IncompleteBatch>>(
  GetAllMixin,
  GetByIdMixin
) {
  constructor(axios: AxiosInstance) {
    super(axios, '/batches');
  }
}
