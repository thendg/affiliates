import { useState } from 'react';

//dummy list
const Leaderboard_list = () => {
  const [leaderboard_list, setLeaderboard] = useState([
    {
      id: 1,
      username: 'Narges',
      walletAddress: 1,
      points: 10,
    },
    {
      id: 2,
      username: 'John',
      walletAddress: 2,
      points: 20,
    },
    {
      id: 3,
      username: 'Jane',
      walletAddress: 3,
      points: 5,
    },
  ]);

  //sort list based on points.
  const sorted = leaderboard_list.sort((a, b) => b.points - a.points);
  let count: number = 1;

  //format and return text.
  return (
    <>
      {leaderboard_list.map(user => (
        <h3 key={user.id}>
          {count++} {user.username} {user.points}
        </h3>
      ))}
    </>
  );
};

export default Leaderboard_list;
