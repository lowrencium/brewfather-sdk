import { AxiosInstance } from 'axios';
import { Fermentable } from '../../models';
import { Apply } from '../../../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin, Update, UpdateMixin } from '../../mixins';
import { GetAllInventoryOptions, UpdateInventoryParams } from './types';

type IncompleteFermentable = Pick<Fermentable, '_id' | 'attenuation' | 'inventory' | 'name' | 'supplier' | 'type' | 'use'>;

export class FermentablesController extends Apply<
  GetAll<Fermentable, IncompleteFermentable, GetAllInventoryOptions<Fermentable>>,
  GetById<Fermentable, IncompleteFermentable>,
  Update<Fermentable, UpdateInventoryParams>
>(GetAllMixin, GetByIdMixin, UpdateMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/fermentables');
  }
}
