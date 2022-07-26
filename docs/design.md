# Design

## General
### Fonts
The site will use three fonts. All titles will the title font with varying sizes depending on the importance of the title. The content font is for any main text-block content. The alt (alternative) font is for small text blocks of un-emphasised content. The alt font should be the same as the content font, but desaturated, italic and lighter (thinner):

- Title
- Content

### Colours
The site should be light themed. If we have time at the end we can implement a dark theme on toggle.

### User Avatars
User profile avatars are boxes showing parts of the user's wallet address. Underneath these boxes is:

- The user's display name
- The user's selected sticker
- The user's selected title

The box for a user with wallet address `3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5` would look like this:

```
  3  F  Z
  b ... t
  Z  c  5
 ---------
  lembn😇
 President
```

> *If you read the box in rows from left to right, the first 4 characters (`3FZb`) are the first 4 characters of the address and the last 4 characters (`tZc5`) are the last 4 characters of the address.*

> *https://www.figma.com/file/dpygkELDU4fqpFFSM3tWmS/Affiliates-Avatar?node-id=0%3A1*

### Loading Animation
4 instances of the organisation logo arranged to be the corners of a square. At regular intervals, they all move in the same direction, clockwise for example. This repeats. Play this loading animation between page switches, as data is fetched from chain.

## Header

> *In top to bottom order of how the appear on the page*

- Large title saying "Block Memberships"
- Some 3D interactable widget extrapolated from organisation logo
- Drop down menu
  - "Memberships"
  - "Members"
  - "Leaderboard"
  - "My Memberships"

## Content

### Memberships

Vertical list of membershp cards for the different levels of membership. Each card has *(in top to bottom order)*:

- Badge: An 3D interactable 3D model associated to the membership level. Higher level memberships get cooler badges.
- Title: The name of the membership level *(in the title font, but smaller than the header title)*.
- Level: The ordinal level of the membership *(in the alt font)*.
- Description: A description of the membership level. Who it is target towards, what the membership level unlocks *(in the content font)*.
- Get: A button allowing people to buy the membership

At the bottom of this page, there will be a short bullet point tutorial on how to buy ETH and setup a wallet for new users to buy memberships.

> - Recommend [Coinbase](https://www.coinbase.com/) to buy ETH (it's quick).
> - Recommend [Metamask](https://metamask.io/) wallet (industry standard).

### Members

A section split into sub-sections. Each sub-section is a horizontal grid/page-wrapped-list, showing all the members of a certain membership level. The members are by their profile avatars, clicking on a profile brings up that user's profile page. The sections are titled with the membership level and title of the given membership, with a horizontal line going across the page. For example:

```
--- Ultimate Membership - Level 5 -----------------------------
```

> *Where the membership title is in the title font, and membership level is in the alt font.*

### Leaderboard

This is a vertical list with each entry being a numerical entry of members. This list is ordered by users' membership points (descending). Clicking on a profile brings up that user's profile page.

### My Membership

Shows the current address box, alongisde the membership card associated to the user's address. Below the membership card there will be different sections, each section will be titled with the horizontal lines like in the "Members" page, except these sections should be expand/collapse-able:

- **Memberhip Card** showing the membership card associated to the user's current membership level .If they have no membership (membership level 0), it will display some sad message like "looks like you're not a member! :(".
- **Stats** showing membership statistics like:
  - Time until membership expiry
  - Total membership length
  - Total collectibles
  - Membership points
- **Titles** showing all the user's titles.
- **Stickers** showing all the user's titles.
- **Profile** allowing users to edit their profile settings:
  - Display name
  - Sticker
  - Title
  - Address box fill color
  - Address box stroke color
  - Address text color
  - Avatar box fill color
  - Avatar box stroke color

### Registration

If the user is not registered (mapped in the smart contract), they will be prompted to register one with a message like "You need a profile to view Block Memberships...", followed by a button in the center in the screen. If this registration message is showing, it will be in the content section. The header's drop down menu will also be disabled.

# Functionality

## Notes

- If your membership expires, you have 7 days to renew it until your total membership is destroyed. During this grace period, you cannot use the membership and total membership length does not increase, it is purely there to give users time to renew their subscriptions so they don't lose everything. After the grace period has elapsed, any membership related data (including collectibles) is destroyed from the account as the account is reset to a fresh level 0. If you want to save your profile but don't want to renew membership, you can export your profile. This produces an HTML file of your profile page, with an extra "Transactions" section at the bottom. The "Transactions" section shows the transactions for all the collectibles associated with the profile. This would be the transaction for which the collectible was added to the contract, followed by the transaction assinging the collectible to the account.

# TODO:

- how to make memberships expire
- you can buy with crossgrade discount. Buying Level 2 is cheaper if you already have Level 1, but Level 1 + Level 2 must be > Level 2. This means that upgrading a level is cheaper than just buying one straight out, but it will prevent people from trying to buy Level 1 -> Level 2 to save money.
- message reminders when you are about to expire?

## Extra Tasks
- [ ] Dark theme toggle