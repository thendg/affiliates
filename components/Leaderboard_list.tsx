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
        <div className="w-full items-center flex flex-grow-1 place-content-start border-solid border-2 rounded  border-white hover:ring-4 hover:ring-white">
          <div className="text-3xl w-full">{count++}</div>
          <div className="text-xl w-full" key={user.id}>
            {user.username}
          </div>
          <div className="text-xl text-right w-full" key={user.id}>
            {user.points}
          </div>
        </div>
      ))}
    </>
  );
};

export default Leaderboard_list;
