/**
 * Enforces that maxPriorityFeePerGas should be less than maxFeePerGas
 */

const { rinkeby } = require("../config");
const { txParams } = require("../utils");

const test = async () => {
  await rinkeby.sendTransaction(
    txParams({ maxFeePerGas: 10e9, maxPriorityFeePerGas: 10e9 + 1 })
  );
};

test()
  .then(() => console.log("Success"))
  .catch(console.error); // Should log `maxFeePerGas should be greater or equal to maxPriorityFeePerGas`
