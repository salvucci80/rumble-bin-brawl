import { useEffect, useState } from "react";

const GameTitle = () => {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-8">
      <h1 
        className={`text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-game-orange via-game-yellow to-game-orange bg-clip-text drop-shadow-lg transition-transform duration-1000 ${
          bounce ? 'animate-bounce' : ''
        }`}
        style={{
          textShadow: '4px 4px 0px black, -4px -4px 0px black, 4px -4px 0px black, -4px 4px 0px black',
          WebkitTextStroke: '3px black'
        }}
      >
        RUMBLE RACCOONS
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-2 drop-shadow-lg">
        BATTLE FOR THE BIN
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-md mx-auto">
        Adorable chaos. Trash-fueled combat. The fight for garbage glory begins.
      </p>
    </div>
  );
};

export default GameTitle;