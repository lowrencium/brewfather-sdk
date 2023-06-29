const { BrewfatherV2Client } = require('brewfather-sdk');

const brewfatherV2Client = new BrewfatherV2Client(
  'JMAZT8jjEpQ2QllUcK5Db4NON4Q2',
  'QZxZUbbElmAjMi0GHbbtLwBdQdeslUHx7G8AoHAfJBuSvWq4hjLdd6qH8zprTTfW'
);

async function main() {
  console.log(await brewfatherV2Client.recipes.getAll({ limit: 4 }));
  console.log(
    await brewfatherV2Client.recipes.getById('0EfCVgOUTZePQdyJp7jnMCEGecqA59', [
      'fermentables',
      'miscs',
    ])
  );

  console.log(await brewfatherV2Client.fermentables.getAll());
  console.log(await brewfatherV2Client.hops.getAll());
  console.log(await brewfatherV2Client.miscs.getAll());
  console.log(await brewfatherV2Client.yeasts.getAll());
  console.log(await brewfatherV2Client.batches.getAll());
}

main();
