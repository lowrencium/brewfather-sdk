import { AxiosInstance } from 'axios';
import { Hop } from './models';
import { Apply } from '../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin } from './mixins';
import { GetAllOptions } from './types';

type GetHopsOptions = GetAllOptions & {
  inventory_negative?: boolean;
  inventory_exists?: boolean;
};

type IncompleteHop = Pick<Hop, '_id' | 'alpha' | 'inventory' | 'name' | 'type' | 'use'>;

export default class extends Apply<GetAll<Hop, IncompleteHop, GetHopsOptions>, GetById<Hop, IncompleteHop>>(GetAllMixin, GetByIdMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/hops');
  }
}
