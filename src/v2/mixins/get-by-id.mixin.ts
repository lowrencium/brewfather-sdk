import { Constructor, Mixin } from '../../utils';
import { AxiosInstance } from 'axios';

export interface GetById<Object extends object, Incomplete = Object> {
  /**
   *
   * @param id Item identifier
   */
  getById(id: string): Promise<Object>;

  /**
   *
   * @param id Item identifier
   * @param includes Fields to include. Default fields are included in addition of the requested fields.
   */
  getById<T extends keyof Object>(id: string, includes: Array<T>): Promise<Incomplete & Pick<Object, T>>;
}

export const GetByIdMixin: Mixin<GetById<any>> = <Object extends object, Incomplete, Target extends Constructor>(
  target: Target
): Constructor<GetById<Object, Incomplete>> & Target => {
  return class extends target implements GetById<Object, Incomplete> {
    axios!: AxiosInstance;
    route!: string;

    constructor(...args: any[]) {
      super(...args);
    }

    getById(id: string): Promise<Object>;
    getById<T extends keyof Object>(id: string, includes: Array<T>): Promise<Incomplete & Pick<Object, T>>;
    getById(id: string, includes?: Array<keyof Object>): Promise<Object> {
      const params: any = {};
      if (Array.isArray(includes)) {
        params.include = includes.join(',');
      }

      return new Promise((resolve, reject) => {
        this.axios
          .get(`${this.route}/${id}`, { params })
          .then((resp) => {
            resolve(resp.data);
          })
          .catch(reject);
      });
    }
  };
};
