class user {
    id: number;
    username: string;
    wallet_address: string;
    memberships: number[];
   
    constructor(given_name:string, given_wallet_address: string) {
        this.id = 1;
      this.username = given_name;
      this.wallet_address = given_wallet_address;
      this.memberships = [];
    }
  }

export default user;