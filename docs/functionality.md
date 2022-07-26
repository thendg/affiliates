# Functionality
> *This document details the high level functionality of the application.*

## Registration
When a new user enters the app, they will be prompted to "register" their address. This will create an entry in the smart contract for the user's address, so we can hold their information on chain. Wihtout this registration, we won't allow them to see any of the app's content. When this happens, the user is given a *Level0* membership, representing that they hold no membership. We do this so that their membership info isn't empty so that programmatically, we don't have to marhsall null or undefined values, but Level0 memberships are a placeholder for emptiness.

A user with a Level0 membership is essentially a spectator on the application, they cannot receive any collectibles, have a blank user profile and do not appear on any of the membership lists/leaderboards.

## Collectibles
Collectibles are a blanket term, referring to items that can be given to members. These include profile titles and profile stickers. Titles are short texts given to a user usually as a reward. For example, a user who won some competition may receive a "Champion" title. Stickers are similar, but are small icons instead of strings of text.

## Membership Points
Membership points can be used to represent a user's activity within an organisation. Collectibles have membership points associated to them, for example, any owner of the "Champion" title may receive +20 membership points when they receive it. Likewise, buying memberships can award membership points too.

## Expiration
If your membership expires, you have 7 days to renew it until your total membership is destroyed. During this grace period, you cannot use the membership and total membership length does not increase, it is purely there to give users time to renew their subscriptions so they don't lose everything. After the grace period has elapsed, any membership related data (including collectibles) is destroyed from the account as the account is reset to a fresh level 0.

## Profile Exports
If you want to save your profile but don't want to renew membership, you can export your profile. This produces an HTML file of your profile page, with an extra "Transactions" section at the bottom. The "Transactions" section shows the transactions for all the collectibles associated with the profile. This would be the transaction for which the collectible was added to the contract, followed by the transaction assinging the collectible to the account.

---

# TODO:
- you can buy with crossgrade discount. Buying Level 2 is cheaper if you already have Level 1, but Level 1 + Level 2 must be > Level 2. This means that upgrading a level is cheaper than just buying one straight out, but it will prevent people from trying to buy Level 1 -> Level 2 to save money.
- message reminders when you are about to expire?
- certain memberships award points periodically?