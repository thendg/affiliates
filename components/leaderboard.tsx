import Leaderboard_list from './Leaderboard_list';

const memberships = ['Blockchain Society', 'KCL Tech', 'Law Society'];

function Leaderboard() {
  return (
    <div className="container">
      <div className="flex">
        <div className="w-full mx-8 border-solid border-2 rounded drop-shadow-md border-white bg-violet-500">
          <h1 className="text-lg font-montserrat text-white p-2">
            {memberships[0]} Leaderboard
          </h1>
          <Leaderboard_list />
        </div>

        <div className="w-full mx-8 border-solid-10 border-2 rounded drop-shadow-md bg-violet-700">
          <h1 className="text-lg font-montserrat text-white p-2">
            {memberships[1]} Leaderboard
          </h1>
          <Leaderboard_list />
        </div>

        <div className="w-full mx-8 border-solid border-2 rounded drop-shadow-md bg-violet-900">
          <h1 className="text-lg font-montserrat text-white p-2">
            {memberships[2]} Leaderboard
          </h1>
          <Leaderboard_list />
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
