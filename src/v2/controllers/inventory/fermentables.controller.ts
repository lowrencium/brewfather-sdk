import { AxiosInstance } from 'axios';
import { Fermentable } from '../../models';
import { Apply } from '../../../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin, Update, UpdateMixin } from '../../mixins';
import { GetAllOptions } from '../../types';
import { UpdateInventoryParams } from './types';

type GetFermentablesOptions = GetAllOptions & {
  inventory_negative?: boolean;
  inventory_exists?: boolean;
};

type IncompleteFermentable = Pick<Fermentable, '_id' | 'attenuation' | 'inventory' | 'name' | 'supplier' | 'type' | 'use'>;

export class FermentablesController extends Apply<
  GetAll<Fermentable, IncompleteFermentable, GetFermentablesOptions>,
  GetById<Fermentable, IncompleteFermentable>,
  Update<Fermentable, UpdateInventoryParams>
>(GetAllMixin, GetByIdMixin, UpdateMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/inventory/fermentables');
  }
}
