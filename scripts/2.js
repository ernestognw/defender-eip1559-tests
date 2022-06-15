/**
 * Verify current operation for non-standard networks is not disrupted
 */

const { harmonyTestS0 } = require("../config");
const { txParams } = require("../utils");

const test = async () => {
  const result = await harmonyTestS0.sendTransaction(
    txParams({ gasPrice: 10e9 })
  );
  console.log(result);
};

test()
  .then(() => console.log("Success"))
  .catch(console.error);
