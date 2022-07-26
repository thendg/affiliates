# Design
> *This document details the design of the application.*

## Style
### Colours
The colour pallete is very simple. By default, the app will have a light themed background, monochrome text and a grey accent colour. In the future, when the app is abstracted into a separate service, users will be able to configure these colours to match the pallete of their organisation.

### Fonts
The site will use three fonts. All titles will use the title font with varying sizes depending on the importance of the title. The content font is for any main text-block content. The alt (alternative) font is for small text blocks of un-emphasised content. The alt font is a desaturated, italic and lighter (thinner) version of the content font.

By default, we'll use some generic sans serif fonts for text on the site. These will be configurable to users in the future aswell (via the Google Fonts API).

## Structure
The app is structured into two sections, a **header** and a **content** section.

### Header
The **header** section is at the top of the application page, holding the constantly present parts of the page. It is comprised of (*in top to bottom order of how they appear on the page*):
- A large title saying "**[Organisation Name]** Affiliates"
- Description line *(alt font)*
- Content selection (dropdown) menu
  - "Memberships" *(default)*
  - "Members"
  - "Leaderboard"
  - "My Memberships"

> *https://www.figma.com/file/2dRiiFQQvU8mzFoLbZZOa6/Affiliates-Header?node-id=0%3A1*

### Content
The **content** section is the main section of the application page. This section holds different content depending on the selected value of the content selction menu in the header section. The designs for each sub-section are detailed below.

#### **Memberships**
Vertical list of membershp cards for the different levels of membership. At the bottom of this page, there will be a short bullet point tutorial on how to buy ETH and setup a wallet for new users to buy memberships.

> - Recommend [Coinbase](https://www.coinbase.com/) to buy ETH (it's quick).
> - Recommend [Metamask](https://metamask.io/) wallet (community standard).

#### **Members**
A list of lists, where each sublist is a horizontal grid/page-wrapped-list, showing all the members of a certain membership level (so there should be a sublist for each membership level). The members displayed by their profile avatars, clicking on a profile brings up that user's profile page. The sublists are titled with the membership level and title of the given membership, with a horizontal line going across the page. For example:

```
--- Ultimate Membership - Level 5 -----------------------------
```

> *Where the membership title is in the title font, and membership level is in the alt font.*

#### **Leaderboard**
This is a vertical list, showing the ranking of each member in the organisation. This list is ordered by users' membership points (descending). Clicking on a profile brings up that user's profile page.

#### **My Membership**
Display's a user's:
- **Memberhip Card** showing the membership card associated to the user's current membership level. If they have no membership (membership level 0), it will display some sad message like "looks like you're not a member! :(".
- **Profile**, but with the following exposed settings allowing users to edit their profile:
  - Display name
  - Sticker
  - Title
  - Address box fill color
  - Address box stroke color
  - Address text color
  - Avatar box fill color
  - Avatar box stroke color

> *These sections should be expand/collapse-able.*

## Appendix
### Membership Cards
Each card has *(in top to bottom order)*:

- Badge: An interactable 3D model associated to the membership level. Higher level memberships get cooler badges.
- Title: The name of the membership level *(in the title font, but smaller than the header title)*.
- Level: The ordinal level of the membership *(in the alt font)*.
- Description: A description of the membership level. Who it is targeted towards, what the membership level unlocks *(in the content font)*.
- Buy: A button allowing people to buy the membership.

[*For example...*](https://www.figma.com/file/lPnzyVWRch1vmtIpiCm0uR/Affiliates-Membership_Card?node-id=0%3A1)

### User Avatars
User avatars are boxes showing parts of the user's wallet address. They show:
- The user's display name
- The user's selected sticker
- The user's selected title
- The user's membership points

The avatar for a user with wallet address `3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5` would look like [this](https://www.figma.com/file/dpygkELDU4fqpFFSM3tWmS/Affiliates-Avatar?node-id=0%3A1).

> *If you read the box in rows from left to right, the first 4 characters (`3FZb`) are the first 4 characters of the address and the last 4 characters (`tZc5`) are the last 4 characters of the address.*

### User Profiles
User profiles display all of a user's public content. This includes (*in top to bottom order of how they appear on the profile*):
- User avatar
- Membership card
- **Stats** showing membership statistics like:
  - Time until membership expiry
  - Total membership length
  - Total collectibles
  - Membership points
- **Titles** showing all the user's titles.
- **Stickers** showing all the user's titles.

### Registration
If the user is not registered (mapped in the smart contract), they will be prompted to register one with a message like "You need a profile to view Block Memberships...", followed by a button in the center in the screen. If this registration message is showing, it will be in the content section. The header's content selection menu will also be disabled.
