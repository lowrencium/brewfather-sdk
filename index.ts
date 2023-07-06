import * as BrewfatherV2 from './src/v2';

declare var module: any;
module.exports = { ...BrewfatherV2 };
export * from './src/v2';
