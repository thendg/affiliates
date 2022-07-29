# Implementation

## Backend

### Storage
- Membership assets (badges, stickers, title) will be stored on IPFS via [Web3.Storage](https://web3.storage/)

### Processing
- The app will be backed by a two smart contracts. The first contract will implement a Moonbeam XC-20 fungible token. This token will be used to represent the "membership points" of a given organisation, so for a generalised product would be re-deployed with each client organisation of the service the associated contract . The second contract holds the membership and user-profile data for a specific organisation, so would also be deployed on a "per-organisation" basis. This second contract is also responsible for assigning memebersip point tokens to users. It is the only contract with access the the token contract's minting capabilities.

> *NOTE: We may want to implement this as just one contract, since it avoids gas and also means that we can store the points as just another collectible. The only reason to serparate them is because it doesn't really make sense to implement ERC20 functions on a contract designed for managing membership data.*