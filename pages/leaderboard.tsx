import Leaderboard_list from '../components/Leaderboard_list';

const Leaderboard = (membership: string) => {
  return (
    <div className="container">
      {/* <h1>{membership} Leaderboard</h1> */}
      <Leaderboard_list />
    </div>
  );
};

export default Leaderboard;
