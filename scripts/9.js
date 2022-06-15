/**
 * Stress test
 */

const { rinkeby } = require("../config");
const { txParams, sleep } = require("../utils");

const test = async () => {
  const txs = new Array(100).fill().map(async (_, i) => {
    await sleep(100 * i);
    try {
      const txResponse = await rinkeby.sendTransaction(
        txParams(
          Math.random() > 0.5
            ? { gasPrice: 1e9 }
            : { maxFeePerGas: 1e9, maxPriorityFeePerGas: 9e8 }
        )
      );
      console.log(
        `${i + 1} | Sent tx ${txResponse.nonce} ${txResponse.hash} ${
          txResponse.transactionId
        }`
      );
    } catch (err) {
      console.log(
        `${i + 1} | Failed sending tx: ${err.message} ${
          err.response.data.message
        }`
      );
    }
  });

  await Promise.all(txs);
};

test()
  .then(() => console.log("Success"))
  .catch(console.error);
