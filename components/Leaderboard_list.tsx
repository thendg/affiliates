import { useState } from 'react';

const Leaderboard_list = () => {
  const [leaderboard_list, setLeaderboard] = useState([
    {
      id: 1,
      username: 'Narges',
      walletAddress: 1,
      memberships: [],
    },
    {
      id: 2,
      username: 'John',
      walletAddress: 2,
      memberships: [],
    },
    {
      id: 3,
      username: 'Jane',
      walletAddress: 3,
      memberships: [],
    },
  ]);

  return (
    <>
      {leaderboard_list.map(user => (
        <h3 key={user.id}>{user.username}</h3>
      ))}
    </>
  );
};

export default Leaderboard_list;
