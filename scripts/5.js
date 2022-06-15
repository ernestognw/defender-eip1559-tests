/**
 * Sends legacy transactions as default when EIP1559Pricing policy is false
 */

const { rinkeby, relayClient } = require("../config");
const { txParams } = require("../utils");

const test = async () => {
  const relayer = await rinkeby.getRelayer();
  await relayClient.updatePolicies(relayer.relayerId, {
    ...relayer.policies,
    EIP1559Pricing: false,
  });
  const res = await rinkeby.sendTransaction(txParams({ speed: "fast" }));
  console.log(res);
};

test()
  .then(() => console.log("Success"))
  .catch(console.error);
