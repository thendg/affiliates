import Leaderboard_list from './Leaderboard_list';

const memberships = ['Blockchain Society', 'KCL Tech', 'Law Society'];

function Leaderboard() {
  return (
    <div className="container">
      <div className="flex">
        <div className="w-full mx-8 border-solid border-2 rounded drop-shadow-md border-white bg-teal-100">
          <h1 className="text-5xl">{memberships[0]} Leaderboard</h1>
          <Leaderboard_list />
        </div>

        <div className="w-full mx-8 border-solid-10 border-2 rounded drop-shadow-md bg-teal-200">
          <h1 className="text-5xl">{memberships[1]} Leaderboard</h1>
          <Leaderboard_list />
        </div>

        <div className="w-full mx-8 border-solid border-2 rounded drop-shadow-md bg-teal-400">
          <h1 className="text-5xl">{memberships[2]} Leaderboard</h1>
          <Leaderboard_list />
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
