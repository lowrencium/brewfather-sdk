import axios, { AxiosInstance } from 'axios';
import { API_URL_V2 } from '../constants';
import Recipes from './recipes';
import Fermentables from './fermentables';
import Hops from './hops';
import Miscs from './miscs';
import Yeasts from './yeasts';
import Batches from './batches';

export default class BrewfatherV2Client {
  protected axios!: AxiosInstance;

  public readonly recipes!: Recipes;
  public readonly fermentables!: Fermentables;
  public readonly hops!: Hops;
  public readonly miscs!: Miscs;
  public readonly yeasts!: Yeasts;
  public readonly batches!: Batches;

  constructor(userId: string, apiKey: string) {
    this.axios = axios.create({
      baseURL: API_URL_V2,
      withCredentials: true,
      auth: {
        username: userId,
        password: apiKey,
      },
    });

    this.recipes = new Recipes(this.axios);
    this.fermentables = new Fermentables(this.axios);
    this.hops = new Hops(this.axios);
    this.miscs = new Miscs(this.axios);
    this.yeasts = new Yeasts(this.axios);
    this.batches = new Batches(this.axios);
  }
}
