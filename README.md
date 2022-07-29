# Affiliates
> *A decentralised, EVM-based subscription membership service representing special memberships in groups or organisations. This DApp is deployed on [Moonbeam](https://moonbeam.network), a smart contract parachain on [Polkadot](https://polkadot.network), allowing for multi-chain interoperability in the blockchain space.*

# Brief
This project is being created for the [EasyA](https://easya.io) x [Polkdadot](https://polkadot.network) 2022 London Hackathon. The project sign-up sheet mentioned that projects submitted to this hackathon should either be a DApp or a Parachain running on Polkadot. We chose to make a DApp but to explain why we're going to have to look a little into Polkadot.

## Polkadot
Most of the common blockchains that we are familiar with (Bitcoin, Ethereum, Solana) are what we call *Layer 1* blockchains. Layer 1 blockchain is independent, and processes transactions within itself, on its own. For example, the Ethereum protocol has a definition for how blocks should be created (transactions), transmitted (discovery) and finalised (consensus). We're also familiar with some Layer 2 Blockchains, like Polygon and Arbitrum. These chains are built *"on top"* of L1 chains, usually to serve the purpose of improving the speed or scalability of using the underlying L1. In this case, development is done and deployed to the L2 chain, which performs some off-chain processing (which is often faster and more scalable than doing everything on-chain), leaving only deposits and withdrawals to the contracts executing on the associated L1.

However, there is a third classification of blockchains: Layer 0. L0 chains sit *underneath* L1s, serving as a base for L1s to be built on. The purpose of this is that any L1s built on the same L0 will be cross-compatible, allowing for multi-chain interoperability within the L0's ecosystem. This is attractive to developers as it presents huge scalability and accessibility options. Polkadot is one of these L0 chains and has a Rust framework, [Substrate](https://substrate.io/), which can be used to create Polkdadot compatible chains. In the Polkadot world, these compatible "child chains" are called **Parachains**.

But how do DApps work on Polkadot? Intrinsically, the Polkadot network has no smart contract capabilities, therefore you cannot create a DApp running directly on Polkadot. *However*, many parachains exist which implement smart contracts in their protocols. A Polkadot DApp is a DApp backed by a smart contract on one of Polkadot's parachains.

## Project Selection
So why did we decide to make a DApp for this project instead of a parachain? Well at first we wanted to make a parachain. On the outside, it seems cooler and more impressive for us to have *our own blockchain*, but in reality, we feel like the parachain is a trap. Here's why:

1. The whole team has to learn Rust.
2. Most blockchain problems are already solved.

#### 1. The whole team has to learn Rust.
Substrate (for Polkadot) is a Rust framework. Therefore to create parachains with it you need to not only be familiar with Rust but be good at it. When we were looking into this option, we were very attracted to it because it showed me that Rust is a beautiful language. But most of the team don't know it and we'd have to get good at it in under two weeks. It's just not a very smart idea.

#### 2. Most blockchain problems are already solved.
The only time it's worth creating a new blockchain, is if it solves a problem or serves a purpose which remains unresolved. The issue with this is that most blockchain problems have already been solved. The main one that remains is the infamous blockchain trilemma but that's way outside the scope of a two-day hackathon. This means that if we did go and make a parachain, it most likely end up falling into one of the following categories:

- It does something that's already been done (probably in a better way) by something else
- It solves a problem that nobody cares about.

In both cases, the work would not be worth our time unless we can *really* find a gap in the blockchain space, but dedicating our time to looking for problems is also not a smart decision.

So with the Parachain option out of the window, all that was left was to create a DApp.

# The Project
Affiliates is a DApp stemming from an idea one of us had about membership tokens. The original concept was to mint an NFT that people can buy as a way to pledge membership with an organisation. The token could then be used to prove your membership, gain access to events, etc. Conceptually this is cool but very simple. After some thinking, we developed this idea into becoming a subscription service. Membership tokens already exist, but blockchain subscription is still a developing scene.

The new concept is that members of an organisation will subscribe to different types/levels of membership with the organisation, giving them access to different things. This concept is interesting because it gives a new take on blockchain proof-of-memberships. Most on-chain data is held indefinitely. A membership token lasts forever, but a subscription can run out. Because of this, the service we're creating is ideal for organisations like university societies, where members are not expected to stay forever, but can optionally remain involved if they wish to. However, in theory, the concept could be extended to any member-based organisation, like magazine/article subscriptions or other similar services.

When they become members, they can receive Membership Points, special cross chain (XC20 compliant - Subtrate compatible) fungible tokens, which they can choose to spend however the organisatoin wishes. For example, the organisation may decide to use the tokens to allow users to buy merchandise, or to get price discounts. The difference betwen them is that since membership points are spendable, a member's point total may decrease, but their rating will only ever increase.

The actual application we're going to be making will be an implementation of this concept for the KCL Blockchain Society. Most of the specification mentioned the [docs](/docs/) can be generalised to apply to any standard client, but for this hackathon we'll implement for KCL Blockchain. Think of the application not as a standalone project or service, but as a page on the KCL Blockchain website, since this is how it would be intergrated.

In the future, this app could be abstracted its own site, offering the same service for multiple organisations similar to how Discourse offers chat forums or Slack offers communication services. This means that organisations can easily integrate the Affiliates service into their site without needing to worry about maintainance or implementation.

Please read the following for more info:
1. [Design](/docs/design.md)
2. [Functionality](/docs/functionality.md)
3. [Implementation](/docs/implementation.md)
