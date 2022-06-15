/**
 * Verify current operation for standard networks is not disrupted
 */

const { rinkeby } = require("../config");
const { txParams } = require("../utils");

const test = async () => {
  const result = await rinkeby.sendTransaction(txParams({ gasPrice: 10e9 }));
  console.log(result);
};

test()
  .then(() => console.log("Success"))
  .catch(console.error);
