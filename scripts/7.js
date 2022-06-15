/**
 * Can't replace a legacy transaction with an EIP1559 transaction
 */

const { rinkeby } = require("../config");
const { txParams } = require("../utils");

const test = async () => {
  const result = await rinkeby.sendTransaction(txParams({ gasPrice: 10e9 }));
  await rinkeby.replaceTransactionById(
    result.transactionId,
    txParams({ maxFeePerGas: 10e9, maxPriorityFeePerGas: 1e9 })
  );
};

test()
  .then(() => console.log("Success"))
  .catch(console.error);
