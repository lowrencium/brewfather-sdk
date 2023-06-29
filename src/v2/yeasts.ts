import { AxiosInstance } from 'axios';
import { Yeast } from './models';
import { Apply } from '../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin } from './mixins';
import { GetAllOptions } from './types';

type GetYeastsOptions = GetAllOptions & {
  inventory_negative?: boolean;
  inventory_exists?: boolean;
};

type IncompleteYeast = Pick<Yeast, '_id' | 'attenuation' | 'inventory' | 'name' | 'type'>;

export default class extends Apply<GetAll<Yeast, IncompleteYeast, GetYeastsOptions>, GetById<Yeast, IncompleteYeast>>(
  GetAllMixin,
  GetByIdMixin
) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/yeasts');
  }
}
