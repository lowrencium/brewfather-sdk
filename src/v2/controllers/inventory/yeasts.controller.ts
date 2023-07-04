import { AxiosInstance } from 'axios';
import { Yeast } from '../../models';
import { Apply } from '../../../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin, Update, UpdateMixin } from '../../mixins';
import { GetAllInventoryOptions, UpdateInventoryParams } from './types';

type IncompleteYeast = Pick<Yeast, '_id' | 'attenuation' | 'inventory' | 'name' | 'type'>;

export class YeastsController extends Apply<
  GetAll<Yeast, IncompleteYeast, GetAllInventoryOptions<Yeast>>,
  GetById<Yeast, IncompleteYeast>,
  Update<Yeast, UpdateInventoryParams>
>(GetAllMixin, GetByIdMixin, UpdateMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/yeasts');
  }
}
