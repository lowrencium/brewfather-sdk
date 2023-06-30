import { AxiosInstance } from 'axios';
import { Hop } from '../../models';
import { Apply } from '../../../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin, Update, UpdateMixin } from '../../mixins';
import { GetAllOptions } from '../../types';
import { UpdateInventoryParams } from './types';

type GetHopsOptions = GetAllOptions & {
  inventory_negative?: boolean;
  inventory_exists?: boolean;
};

type IncompleteHop = Pick<Hop, '_id' | 'alpha' | 'inventory' | 'name' | 'type' | 'use'>;

export class HopsController extends Apply<
  GetAll<Hop, IncompleteHop, GetHopsOptions>,
  GetById<Hop, IncompleteHop>,
  Update<Hop, UpdateInventoryParams>
>(GetAllMixin, GetByIdMixin, UpdateMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/hops');
  }
}
