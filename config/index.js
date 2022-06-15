const { Relayer, RelayClient } = require("defender-relay-client");
const { relayerKeys, apiKeys } = require("./environment");

const relayers = Object.entries(relayerKeys).reduce((acc, [network, keys]) => {
  acc[network] = new Relayer(keys);
  return acc;
}, {});

const relayClient = new RelayClient({
  apiKey: apiKeys.apiKey,
  apiSecret: apiKeys.secretKey,
});

module.exports = { ...relayers, relayClient };
