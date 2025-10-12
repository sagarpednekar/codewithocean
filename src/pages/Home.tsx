import SnakeGame from "../components/SnakeGame";

const Home = () => {
  return (
    <div className="flex-1 flex items-center justify-between px-20">
      {/* Left Content */}
      <div>
        <div className="text-slate-400 mb-2">Hi all. I am</div>
        <h1 className="text-6xl font-bold text-white mb-4">Sagar Pednekar</h1>
        <div className="text-2xl text-teal-400 mb-8">
          &gt; Full-Stack developer
        </div>

        <div className="text-slate-500 space-y-1 mb-6">
          <div>// complete the game to continue</div>
          <div>// find my profile on Github:</div>
          <div>
            <span className="text-teal-400">const</span>{" "}
            <span className="text-purple-400">githubLink</span> ={" "}
            <span className="text-orange-300">
              "https://github.com/sagarpednekar"
            </span>
          </div>
        </div>
      </div>

      {/* Snake Game */}
      <SnakeGame />
    </div>
  );
};

export default Home;
