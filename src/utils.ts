import { AxiosInstance } from 'axios';

export type Constructor<T = any> = new (...args: any[]) => T;
type BaseClassConstructor<T = any> = new (axios: AxiosInstance, route: string) => T & BaseClass;

export class BaseClass {
  constructor(protected readonly axios: AxiosInstance, protected readonly route: string) {}
}

export type Mixin<Base> = <Target extends Constructor>(target: Target) => Constructor<Base> & Target;

export function Apply<A, B>(...mixins: [Mixin<A>, Mixin<B>]): BaseClassConstructor<A & B>;
export function Apply<A, B, C>(...mixins: [Mixin<A>, Mixin<B>, Mixin<C>]): BaseClassConstructor<A & B & C>;
export function Apply<A, B, C, D>(...mixins: [Mixin<A>, Mixin<B>, Mixin<C>, Mixin<D>]): BaseClassConstructor<A & B & C & D>;
export function Apply<A, B, C, D, E>(
  ...mixins: [Mixin<A>, Mixin<B>, Mixin<C>, Mixin<D>, Mixin<E>]
): BaseClassConstructor<A & B & C & D & E>;
export function Apply<T>(...mixins: Mixin<T>[]): BaseClassConstructor<T> {
  let newClass = class extends BaseClass {};
  for (let mixin of mixins) {
    newClass = mixin(newClass);
  }

  return newClass as BaseClassConstructor<T>;
}
