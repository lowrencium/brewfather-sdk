import { AxiosInstance } from 'axios';
import { Misc } from '../../models';
import { Apply } from '../../../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin, Update, UpdateMixin } from '../../mixins';
import { GetAllInventoryOptions, UpdateInventoryParams } from './types';

type IncompleteMisc = Pick<Misc, '_id' | 'inventory' | 'name' | 'type' | 'use'>;

export class MiscsController extends Apply<
  GetAll<Misc, IncompleteMisc, GetAllInventoryOptions<Misc>>,
  GetById<Misc, IncompleteMisc>,
  Update<Misc, UpdateInventoryParams>
>(GetAllMixin, GetByIdMixin, UpdateMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/miscs');
  }
}
