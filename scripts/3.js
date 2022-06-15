/**
 * Rejects EIP1559 transactions for non EIP1559 networks
 */

const { optimismKovan } = require("../config");
const { txParams } = require("../utils");

const test = async () => {
  await optimismKovan.sendTransaction(
    txParams({ maxFeePerGas: 10e9, maxPriorityFeePerGas: 15e8 })
  );
};

test()
  .then(() => console.log("Success"))
  .catch(console.error); // Should log `Network optimism-kovan doesn't support EIP1559 transactions`
