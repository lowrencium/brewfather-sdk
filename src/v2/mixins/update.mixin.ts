import { Constructor, Mixin } from '../../utils';
import { AxiosInstance } from 'axios';

export interface Update<Object extends object, Params extends object> {
  update(id: string, data: Params): Promise<Object>;
}

export const UpdateMixin: Mixin<Update<any, any>> = <Object extends object, Params extends object, Target extends Constructor>(
  target: Target
): Constructor<Update<Object, Params>> & Target => {
  return class extends target implements Update<Object, Params> {
    axios!: AxiosInstance;
    route!: string;

    constructor(...args: any[]) {
      super(...args);
    }

    update(id: string, data: Params): Promise<Object> {
      return new Promise((resolve, reject) => {
        this.axios
          .patch(`${this.route}/${id}`, data)
          .then((resp) => {
            resolve(resp.data);
          })
          .catch(reject);
      });
    }
  };
};
