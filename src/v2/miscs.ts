import { AxiosInstance } from 'axios';
import { Misc } from './models';
import { Apply } from '../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin } from './mixins';
import { GetAllOptions } from './types';

type GetMiscsOptions = GetAllOptions & {
  inventory_negative?: boolean;
  inventory_exists?: boolean;
};

type IncompleteMisc = Pick<Misc, '_id' | 'inventory' | 'name' | 'type' | 'use'>;

export default class extends Apply<
  GetAll<Misc, IncompleteMisc, GetMiscsOptions>,
  GetById<Misc, IncompleteMisc>
>(GetAllMixin, GetByIdMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/miscs');
  }
}
