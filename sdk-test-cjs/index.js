const liquid = require('@liquidclouddev/sdk').default;

(async () => {
  const client = await liquid({
    clientId: 'eefe7f3c5f2323e30fd42ea2e8091d09',
    env: 'staging',
  })

  const product = await client.product({
    ids: ['GROUPING-33277'],
    shipAddress: '120 Nassau Street, New York, NY 11201',
  })

  console.log(JSON.stringify(product));
})();

