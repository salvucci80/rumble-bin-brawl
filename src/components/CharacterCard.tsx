import { Button } from "@/components/ui/button";

interface CharacterCardProps {
  name: string;
  image: string;
  color: 'purple' | 'red' | 'blue' | 'green' | 'orange';
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const CharacterCard = ({ name, image, color, description, isSelected, onClick }: CharacterCardProps) => {
  const colorVariants = {
    purple: 'from-white to-white border-purple-700',
    red: 'from-game-red to-red-500 border-red-700', 
    blue: 'from-game-blue to-blue-500 border-blue-700',
    green: 'from-white to-white border-green-700',
    orange: 'from-game-orange to-game-yellow border-game-orange-dark'
  };

  return (
    <div 
      className={`relative p-4 rounded-2xl bg-gradient-to-br ${colorVariants[color]} border-4 transition-all duration-300 hover:scale-105 cursor-pointer group ${
        isSelected ? 'ring-4 ring-game-yellow shadow-2xl scale-105' : 'hover:shadow-xl'
      }`}
      onClick={onClick}
    >
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className={`font-black text-lg mb-2 drop-shadow-lg ${
          color === 'purple' || color === 'green' ? 'text-black' : 'text-white'
        }`}>
          {name}
        </h3>
        <p className={`text-sm font-semibold drop-shadow ${
          color === 'purple' || color === 'green' ? 'text-black/80' : 'text-white/80'
        }`}>
          {description}
        </p>
      </div>
      {isSelected && (
        <div className="absolute -top-2 -right-2 bg-game-yellow text-black w-8 h-8 rounded-full flex items-center justify-center font-black text-lg border-4 border-black">
          ✓
        </div>
      )}
    </div>
  );
};

export default CharacterCard;