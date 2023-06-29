import { AxiosInstance } from 'axios';

export type Constructor<T = any> = new (...args: any[]) => T;

export class BaseClass {
  constructor(protected readonly axios: AxiosInstance, protected readonly route: string) {}
}

export type Mixin<Base> = <Target extends Constructor>(
  target: Target
) => Constructor<Base> & Target;

export function Apply<A, B>(...mixins: [Mixin<A>, Mixin<B>]): Constructor<A & B> & BaseClass;
export function Apply<A, B, C>(
  ...mixins: [Mixin<A>, Mixin<B>, Mixin<C>]
): Constructor<A & B & C> & BaseClass;
export function Apply<A, B, C, D>(
  ...mixins: [Mixin<A>, Mixin<B>, Mixin<C>, Mixin<D>]
): Constructor<A & B & C & D> & BaseClass;
export function Apply<A, B, C, D, E>(
  ...mixins: [Mixin<A>, Mixin<B>, Mixin<C>, Mixin<D>, Mixin<E>]
): Constructor<A & B & C & D & E> & BaseClass;
export function Apply<T>(...mixins: Mixin<T>[]): Constructor<T> & BaseClass {
  let newClass = class extends BaseClass {};
  for (let mixin of mixins) {
    newClass = mixin(newClass);
  }

  return newClass as Constructor<T> & BaseClass;
}
