import { Button } from "@/components/ui/button";
import { Coins, Zap, ShoppingCart } from "lucide-react";

const TokenInfo = () => {
  return (
    <div className="bg-card border-4 border-game-orange rounded-2xl p-6 mb-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gradient-to-r from-game-orange to-game-yellow p-3 rounded-xl">
          <Coins className="w-8 h-8 text-black" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-foreground">TRASH TOKENS</h3>
          <p className="text-muted-foreground">Your Solana meme token balance</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-game-green to-green-500 p-4 rounded-xl text-center border-4 border-green-700">
          <h4 className="text-white font-black text-lg mb-2">CURRENT BALANCE</h4>
          <p className="text-white text-3xl font-black">1,337</p>
          <p className="text-white/80 text-sm">TRASH Tokens</p>
        </div>
        
        <div className="bg-gradient-to-r from-game-blue to-blue-500 p-4 rounded-xl text-center border-4 border-blue-700">
          <h4 className="text-white font-black text-lg mb-2">ENTRY COST</h4>
          <p className="text-white text-3xl font-black">10</p>
          <p className="text-white/80 text-sm">Tokens per match</p>
        </div>
        
        <div className="bg-gradient-to-r from-game-purple to-purple-500 p-4 rounded-xl text-center border-4 border-purple-700">
          <h4 className="text-white font-black text-lg mb-2">REWARDS</h4>
          <p className="text-white text-3xl font-black">50</p>
          <p className="text-white/80 text-sm">Tokens for victory</p>
        </div>
      </div>
      
      <div className="flex gap-4 justify-center">
        <Button variant="game-blue" size="lg" className="flex items-center gap-2">
          <Zap className="w-5 h-5" />
          UPGRADE RACCOON
        </Button>
        <Button variant="game-purple" size="lg" className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          BUY TRASH TOKENS
        </Button>
      </div>
    </div>
  );
};

export default TokenInfo;