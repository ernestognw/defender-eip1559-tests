const { testerAddress } = require("../config/environment");

const minutesMs = (min) => 60 * 1000 * min;

const txParams = (params) => ({
  to: testerAddress,
  value: 1,
  gasLimit: 21000,
  validUntil: new Date(new Date().getTime() + minutesMs(5)),
  ...params,
});

const sleep = async (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

module.exports = { txParams, sleep };
