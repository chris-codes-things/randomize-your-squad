
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Coin, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoinFlipper: React.FC = () => {
  const [coinCount, setCoinCount] = useState<number>(1);
  const [flippedCoins, setFlippedCoins] = useState<('heads' | 'tails')[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  
  const flipCoins = () => {
    setIsFlipping(true);
    
    // First show animation
    const animationFlips: ('heads' | 'tails')[] = [];
    for (let i = 0; i < coinCount; i++) {
      animationFlips.push(Math.random() < 0.5 ? 'heads' : 'tails');
    }
    setFlippedCoins(animationFlips);
    
    // Then after a delay, show final results
    setTimeout(() => {
      const results: ('heads' | 'tails')[] = [];
      for (let i = 0; i < coinCount; i++) {
        results.push(Math.random() < 0.5 ? 'heads' : 'tails');
      }
      setFlippedCoins(results);
      setIsFlipping(false);
      toast.success('Coins flipped!');
    }, 800);
  };
  
  const getTotals = () => {
    const headsCount = flippedCoins.filter(result => result === 'heads').length;
    const tailsCount = flippedCoins.length - headsCount;
    
    return { headsCount, tailsCount };
  };
  
  const { headsCount, tailsCount } = getTotals();
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-16">
      <div className="flex flex-col gap-6 mb-10">
        <div className="w-full animate-slide-up">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center mb-3">
              <Coin className="mr-2 h-5 w-5 text-primary" />
              <h2 className="card-header !mb-0">Coin Flipper</h2>
            </div>
            
            <div className="text-sm text-muted-foreground mb-4">
              Select how many coins to flip at once
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="w-32">
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={coinCount}
                  onChange={(e) => setCoinCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full p-3 rounded-xl bg-white/50 border border-border input-focus-ring"
                />
              </div>
              <span className="text-muted-foreground">coin{coinCount !== 1 ? 's' : ''}</span>
              
              <div className="ml-auto">
                <Button
                  onClick={flipCoins}
                  disabled={isFlipping}
                  className="bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-xl flex items-center gap-2"
                >
                  <RotateCw className={`h-5 w-5 ${isFlipping ? 'animate-spin' : ''}`} />
                  <span>Flip {coinCount > 1 ? 'Coins' : 'Coin'}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {flippedCoins.length > 0 && (
        <div className="animate-slide-up">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-medium mb-4 text-primary">Results</h2>
            
            {coinCount > 5 ? (
              <div className="mb-6 text-center">
                <div className="text-3xl font-bold mb-4">
                  {headsCount} Heads • {tailsCount} Tails
                </div>
                <div className="w-full bg-white/30 h-8 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary flex items-center justify-center text-white font-medium"
                    style={{ width: `${(headsCount / flippedCoins.length) * 100}%` }}
                  >
                    {flippedCoins.length > 0 && `${Math.round((headsCount / flippedCoins.length) * 100)}%`}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
                {flippedCoins.map((result, index) => (
                  <div 
                    key={index} 
                    className={`aspect-square rounded-full flex items-center justify-center font-bold text-lg
                              ${result === 'heads' ? 'bg-primary text-white' : 'bg-white/80 text-foreground'}`}
                  >
                    {result === 'heads' ? 'H' : 'T'}
                  </div>
                ))}
              </div>
            )}
            
            {coinCount > 1 && coinCount <= 5 && (
              <div className="text-center text-muted-foreground">
                {headsCount} Heads • {tailsCount} Tails
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinFlipper;
