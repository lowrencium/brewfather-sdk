import { Constructor, Mixin } from '../../utils';
import { GetAllOptions } from '../types';
import { AxiosInstance } from 'axios/index';

export interface GetAll<Object extends object, Incomplete = Object, Options extends GetAllOptions = GetAllOptions> {
  getAll(options?: Options): Promise<Incomplete[]>;

  getAll(complete: true, options?: Options): Promise<Object[]>;

  getAll<Keys extends keyof Object>(
    complete: false,
    includes: Array<Keys>,
    options?: Options
  ): Promise<(Incomplete & Pick<Object, Keys>)[]>;
}

export const GetAllMixin: Mixin<GetAll<any>> = <
  Object extends object,
  Incomplete = Object,
  Options extends GetAllOptions = GetAllOptions,
  Target extends Constructor = Constructor
>(
  target: Target
): Constructor<GetAll<Object, Incomplete, Options>> & Target => {
  return class extends target {
    axios!: AxiosInstance;
    route!: string;

    constructor(...args: any[]) {
      super(args[0], args[1]);
    }

    getAll(options?: Options): Promise<Incomplete[]>;
    getAll(complete: true, options?: Options): Promise<Object[]>;
    getAll<Keys extends keyof Object>(
      complete: false,
      includes: Array<Keys>,
      options?: Options
    ): Promise<(Incomplete & Pick<Object, Keys>)[]>;
    getAll(
      completeOrOptions?: boolean | Options,
      includesOrOptions?: Array<keyof Object> | Options,
      options?: Options
    ): Promise<(Object | Incomplete)[]> {
      options = (
        typeof completeOrOptions === 'boolean' ? (Array.isArray(includesOrOptions) ? options : includesOrOptions) : completeOrOptions
      ) as Options;

      const params: any = options ?? {};
      if (typeof completeOrOptions === 'boolean') {
        params.complete = completeOrOptions;

        if (!completeOrOptions && Array.isArray(includesOrOptions)) {
          params.include = includesOrOptions.join(',');
        }
      }

      return new Promise((resolve, reject) => {
        this.axios
          .get(this.route, { params })
          .then((resp) => {
            resolve(resp.data);
          })
          .catch(reject);
      });
    }
  };
};
