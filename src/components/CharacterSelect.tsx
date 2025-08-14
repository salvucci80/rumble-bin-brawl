import { useState } from "react";
import CharacterCard from "./CharacterCard";
import { Button } from "@/components/ui/button";
import lilSwipeyImg from "@/assets/lil-swipey.png";
import dumpsterDuchessImg from "@/assets/dumpster-duchess.png";
import captainCanImg from "@/assets/captain-can.png";
import spaghettiSamImg from "@/assets/spaghetti-sam.png";
import noodleFingersImg from "@/assets/noodle-fingers.png";
import rustyPawsImg from "@/assets/rusty-paws.png";

const characters = [
  {
    id: 'lil-swipey',
    name: "LIL' SWIPEY",
    image: lilSwipeyImg,
    color: 'purple' as const,
    description: "Speed demon with frying pan fury"
  },
  {
    id: 'dumpster-duchess',
    name: "DUMPSTER DUCHESS", 
    image: dumpsterDuchessImg,
    color: 'red' as const,
    description: "Stylish brawler with perfume power"
  },
  {
    id: 'captain-can',
    name: "CAPTAIN CAN",
    image: captainCanImg,
    color: 'blue' as const,
    description: "Tank with trash lid defense"
  },
  {
    id: 'spaghetti-sam',
    name: "SPAGHETTI SAM",
    image: spaghettiSamImg,
    color: 'green' as const,
    description: "Long-range pasta projectiles"
  },
  {
    id: 'noodle-fingers',
    name: "NOODLE FINGERS",
    image: noodleFingersImg,
    color: 'orange' as const,
    description: "Elastic grab master"
  },
  {
    id: 'rusty-paws',
    name: "RUSTY PAWS",
    image: rustyPawsImg,
    color: 'purple' as const,
    description: "Plunger and toilet paper whip"
  }
];

const CharacterSelect = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-black text-transparent bg-gradient-to-r from-game-orange to-game-yellow bg-clip-text mb-2"
          style={{ WebkitTextStroke: '2px black' }}>
        CHARACTER SELECT
      </h2>
      <p className="text-lg text-muted-foreground mb-8">Choose your raccoon fighter!</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            color={character.color}
            description={character.description}
            isSelected={selectedCharacter === character.id}
            onClick={() => setSelectedCharacter(character.id)}
          />
        ))}
      </div>
      
      {selectedCharacter && (
        <Button variant="game" size="xl" className="animate-pulse">
          ENTER THE BATTLE!
        </Button>
      )}
    </div>
  );
};

export default CharacterSelect;