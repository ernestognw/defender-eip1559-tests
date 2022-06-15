/**
 * Sends EIP1559 transactions as default when EIP1559Pricing policy is true
 */

const { rinkeby, relayClient } = require("../config");
const { txParams } = require("../utils");

const test = async () => {
  const relayer = await rinkeby.getRelayer();
  await relayClient.updatePolicies(relayer.relayerId, {
    ...relayer.policies,
    EIP1559Pricing: true,
  });
  const res = await rinkeby.sendTransaction(txParams({ speed: "fast" }));
  console.log(res);
};

test()
  .then(() => console.log("Success"))
  .catch(console.error);
