import GameTitle from "@/components/GameTitle";
import TokenInfo from "@/components/TokenInfo";
import CharacterSelect from "@/components/CharacterSelect";
import GameModes from "@/components/GameModes";
import gameBackground from "@/assets/game-background.png";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background relative overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.8), rgba(15, 15, 15, 0.9)), url(${gameBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-game-orange rounded-full animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-game-yellow rounded-full animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-game-blue rounded-full animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <GameTitle />
        <TokenInfo />
        <GameModes />
        <CharacterSelect />
      </div>
    </div>
  );
};

export default Index;
