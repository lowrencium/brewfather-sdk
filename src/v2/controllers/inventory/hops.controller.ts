import { AxiosInstance } from 'axios';
import { Hop } from '../../models';
import { Apply } from '../../../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin, Update, UpdateMixin } from '../../mixins';
import { GetAllInventoryOptions, UpdateInventoryParams } from './types';

type IncompleteHop = Pick<Hop, '_id' | 'alpha' | 'inventory' | 'name' | 'type' | 'use'>;

export class HopsController extends Apply<
  GetAll<Hop, IncompleteHop, GetAllInventoryOptions<Hop>>,
  GetById<Hop, IncompleteHop>,
  Update<Hop, UpdateInventoryParams>
>(GetAllMixin, GetByIdMixin, UpdateMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/hops');
  }
}
