import axios, { AxiosInstance } from 'axios';
import { API_URL_V2 } from '../constants';
import {
  BatchesController,
  FermentablesController,
  HopsController,
  MiscsController,
  RecipesController,
  YeastsController,
} from './controllers';

export default class BrewfatherV2Client {
  protected axios!: AxiosInstance;

  public readonly recipes!: RecipesController;
  public readonly batches!: BatchesController;
  public readonly inventory!: {
    fermentables: FermentablesController;
    hops: HopsController;
    miscs: MiscsController;
    yeasts: YeastsController;
  };

  constructor(userId: string, apiKey: string) {
    this.axios = axios.create({
      baseURL: API_URL_V2,
      withCredentials: true,
      auth: {
        username: userId,
        password: apiKey,
      },
    });

    this.recipes = new RecipesController(this.axios);
    this.batches = new BatchesController(this.axios);
    this.inventory = {
      fermentables: new FermentablesController(this.axios),
      hops: new HopsController(this.axios),
      miscs: new MiscsController(this.axios),
      yeasts: new YeastsController(this.axios),
    };
  }
}
