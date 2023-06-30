const { BrewfatherV2Client } = require('brewfather-sdk');
const env = require('../env.json');

const brewfatherV2Client = new BrewfatherV2Client(env.userId, env.apiKey);

async function main() {
  console.log(await brewfatherV2Client.recipes.getAll({ limit: 4 }));
  console.log(await brewfatherV2Client.inventory.fermentables.getAll());
  console.log(await brewfatherV2Client.inventory.hops.getAll());
  console.log(await brewfatherV2Client.inventory.miscs.getAll());
  console.log(await brewfatherV2Client.inventory.yeasts.getAll());
  console.log(await brewfatherV2Client.batches.getAll());
}

main();
