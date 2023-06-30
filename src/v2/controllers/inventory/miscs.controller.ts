import { AxiosInstance } from 'axios';
import { Misc } from '../../models';
import { Apply } from '../../../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin, Update, UpdateMixin } from '../../mixins';
import { GetAllOptions } from '../../types';
import { UpdateInventoryParams } from './types';

type GetMiscsOptions = GetAllOptions & {
  inventory_negative?: boolean;
  inventory_exists?: boolean;
};

type IncompleteMisc = Pick<Misc, '_id' | 'inventory' | 'name' | 'type' | 'use'>;

export class MiscsController extends Apply<
  GetAll<Misc, IncompleteMisc, GetMiscsOptions>,
  GetById<Misc, IncompleteMisc>,
  Update<Misc, UpdateInventoryParams>
>(GetAllMixin, GetByIdMixin, UpdateMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/miscs');
  }
}
