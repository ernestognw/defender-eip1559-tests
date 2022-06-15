## Defender EIP1559 tests ⚙️

This is an experimental package to throw tests against Defender using EIP1559 transactions. It contains a prepared set of scripts to run, so it can be done fast and easily replicated.

### Getting started

Copy the `.env.example`, and fill the corresponding needed env variables as follows:

```
# Team API Keys from Defender (with relayer capabilities)
API_KEY=
SECRET_KEY=

# This is your EOA, so everything goes back to you
TESTER_EOA_ADDRESS=

# Network relayer API Keys (be sure all of them are funded)
*_RELAYER_API_KEY=
*_RELAYER_SECRET_KEY=
```

Then, just install the dependencies with `yarn`

And finally:

```
node scripts/{number}
```

### List of scripts

1. [Verify current operation for standard networks is not disrupted](./scripts/1.js)
2. [Verify current operation for non-standard networks is not disrupted](./scripts/2.js)
3. [Rejects EIP1559 transactions for non EIP1559 networks](./scripts/3.js)
4. [Enforces that maxPriorityFeePerGas should be less or equal than maxFeePerGas](./scripts/4.js)
5. [Sends legacy transactions as default when EIP1559Pricing policy is false](./scripts/5.js)
6. [Sends EIP1559 transactions as default when EIP1559Pricing policy is true] (./scripts/6.js)
7. [Can't replace a legacy transaction with an EIP1559 transaction] (./scripts/7.js)
8. [Can't replace an EIP1559 transaction with a legacy transaction] (./scripts/8.js)
9. [Stress test] (./scripts/9.js)
10. [Stress test with non-standard EIP1559 network] (./scripts/10.js)
