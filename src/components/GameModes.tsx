import { Button } from "@/components/ui/button";
import { Swords, Trophy, Users, Zap } from "lucide-react";

const GameModes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-gradient-to-br from-game-orange to-game-yellow border-4 border-game-orange-dark rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
        <div className="bg-black/20 p-4 rounded-xl mb-4 mx-auto w-fit">
          <Swords className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-black text-white mb-2">QUICK BRAWL</h3>
        <p className="text-white/80 font-semibold mb-4">Fast 30-60 second matches</p>
        <Button variant="game-red" size="lg" className="w-full">
          PLAY NOW
        </Button>
      </div>

      <div className="bg-gradient-to-br from-game-blue to-blue-500 border-4 border-blue-700 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
        <div className="bg-black/20 p-4 rounded-xl mb-4 mx-auto w-fit">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-black text-white mb-2">TOURNAMENT</h3>
        <p className="text-white/80 font-semibold mb-4">Compete for token prizes</p>
        <Button variant="game" size="lg" className="w-full text-white font-black">
          TOURNAMENT
        </Button>
      </div>

      <div className="bg-gradient-to-br from-game-purple to-purple-500 border-4 border-purple-700 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
        <div className="bg-black/20 p-4 rounded-xl mb-4 mx-auto w-fit">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-black text-white mb-2">MULTIPLAYER</h3>
        <p className="text-white/80 font-semibold mb-4">Battle friends online</p>
        <Button variant="game-green" size="lg" className="w-full">
          FIND MATCH
        </Button>
      </div>

      <div className="bg-gradient-to-br from-game-green to-green-500 border-4 border-green-700 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
        <div className="bg-black/20 p-4 rounded-xl mb-4 mx-auto w-fit">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-black text-white mb-2">BOSS BATTLE</h3>
        <p className="text-white/80 font-semibold mb-4">Face the Legends of the Bin</p>
        <Button variant="game-red" size="lg" className="w-full">
          CHALLENGE BOSS
        </Button>
      </div>
    </div>
  );
};

export default GameModes;