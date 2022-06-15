const dotenv = require("dotenv");

dotenv.config();

const apiKeys = {
  apiKey: process.env.API_KEY,
  secretKey: process.env.SECRET_KEY,
};

const relayerKeys = {
  rinkeby: {
    apiKey: process.env.RINKEBY_RELAYER_API_KEY,
    apiSecret: process.env.RINKEBY_RELAYER_SECRET_KEY,
  },
  harmonyTestS0: {
    apiKey: process.env.HARMONY_TEST_S0_RELAYER_API_KEY,
    apiSecret: process.env.HARMONY_TEST_S0_RELAYER_SECRET_KEY,
  },
  optimismKovan: {
    apiKey: process.env.OPTIMISM_KOVAN_RELAYER_API_KEY,
    apiSecret: process.env.OPTIMISM_KOVAN_RELAYER_SECRET_KEY,
  },
  moonbaseAlpha: {
    apiKey: process.env.MOONBASE_ALPHA_RELAYER_API_KEY,
    apiSecret: process.env.MOONBASE_ALPHA_RELAYER_SECRET_KEY,
  },
};

const testerAddress = process.env.TESTER_EOA_ADDRESS;

module.exports = { apiKeys, relayerKeys, testerAddress };
