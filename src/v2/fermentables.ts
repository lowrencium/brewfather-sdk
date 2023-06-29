import { AxiosInstance } from 'axios';
import { Fermentable } from './models';
import { Apply } from '../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin } from './mixins';
import { GetAllOptions } from './types';

type GetFermentablesOptions = GetAllOptions & {
  inventory_negative?: boolean;
  inventory_exists?: boolean;
};

type IncompleteFermentable = Pick<Fermentable, '_id' | 'attenuation' | 'inventory' | 'name' | 'supplier' | 'type' | 'use'>;

export default class extends Apply<
  GetAll<Fermentable, IncompleteFermentable, GetFermentablesOptions>,
  GetById<Fermentable, IncompleteFermentable>
>(GetAllMixin, GetByIdMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/fermentables');
  }
}
