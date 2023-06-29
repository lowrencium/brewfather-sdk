import { Recipe } from './models';
import { Apply } from '../utils';
import { GetAll, GetAllMixin, GetById, GetByIdMixin } from './mixins';
import { AxiosInstance } from 'axios';

type IncompleteRecipe = Pick<Recipe, '_id' | 'author' | 'equipement' | 'name' | 'style' | 'type'>;

export default class extends Apply<
  GetAll<Recipe, IncompleteRecipe>,
  GetById<Recipe, IncompleteRecipe>
>(GetAllMixin, GetByIdMixin) {
  constructor(axios: AxiosInstance) {
    super(axios, '/recipes');
  }
}
