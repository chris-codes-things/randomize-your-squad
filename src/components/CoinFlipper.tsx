
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Coins, RotateCw, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoinFlipper: React.FC = () => {
  const [coinCount, setCoinCount] = useState<number>(1);
  const [flippedCoins, setFlippedCoins] = useState<('heads' | 'tails')[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  
  // Add space bar listener for coin flipping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isFlipping && !e.repeat && 
          !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        flipCoins();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFlipping]);
  
  const flipCoins = () => {
    if (coinCount < 1 || coinCount > 10) {
      toast.error('Please choose between 1 and 10 coins');
      return;
    }
    
    setIsFlipping(true);
    setShowResults(false);
    
    let count = 0;
    const interval = setInterval(() => {
      const animationFlips: ('heads' | 'tails')[] = [];
      for (let i = 0; i < coinCount; i++) {
        animationFlips.push(Math.random() < 0.5 ? 'heads' : 'tails');
      }
      setFlippedCoins(animationFlips);
      count++;
      
      if (count > 8) {
        clearInterval(interval);
        
        const results: ('heads' | 'tails')[] = [];
        for (let i = 0; i < coinCount; i++) {
          results.push(Math.random() < 0.5 ? 'heads' : 'tails');
        }
        setFlippedCoins(results);
        setIsFlipping(false);
        setShowResults(true);
        toast.success('Coins flipped!');
        
        // Scroll to show both controls and results
        setTimeout(() => {
          if (resultsRef.current) {
            window.scrollTo({
              top: resultsRef.current.offsetTop - 20,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }, 150);
  };
  
  const getTotals = () => {
    const headsCount = flippedCoins.filter(result => result === 'heads').length;
    const tailsCount = flippedCoins.length - headsCount;
    
    return { headsCount, tailsCount };
  };
  
  const { headsCount, tailsCount } = getTotals();
  
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-16">
      <div className="flex flex-col gap-6 mb-10" ref={controlsRef}>
        <div className="w-full animate-slide-up">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center mb-3">
              <Coins className="mr-2 h-5 w-5 text-primary" />
              <h2 className="card-header !mb-0">Coin Flipper</h2>
            </div>
            
            <div className="text-sm text-muted-foreground mb-4">
              Select how many coins to flip at once
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={coinCount}
                  onChange={(e) => setCoinCount(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-20 p-3 rounded-xl bg-white/50 border border-border input-focus-ring"
                />
                <span className="text-muted-foreground">coin{coinCount !== 1 ? 's' : ''}</span>
              </div>
              
              <Button
                onClick={flipCoins}
                disabled={isFlipping}
                className="bg-primary hover:bg-primary/90 text-white px-5 py-3 h-[48px] rounded-xl flex items-center gap-2"
              >
                <RotateCw className={`h-5 w-5 ${isFlipping ? 'animate-spin' : ''}`} />
                <span>Flip {coinCount > 1 ? 'Coins' : 'Coin'}</span>
              </Button>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
              <Info className="h-4 w-4" />
              <p>Press the space bar to flip coins quickly</p>
            </div>
          </div>
        </div>
      </div>
      
      {flippedCoins.length > 0 && (
        <div className="animate-slide-up" ref={resultsRef}>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-medium mb-4 text-primary">Results</h2>
            
            <div className="flex flex-wrap justify-center gap-4 my-6">
              {flippedCoins.map((result, index) => (
                <div 
                  key={index} 
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-md 
                             ${isFlipping ? 'animate-bounce-light' : ''}
                             ${result === 'heads' ? 'bg-primary text-white' : 'bg-white/80 text-foreground'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="font-bold text-2xl">
                    {result === 'heads' ? 'H' : 'T'}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              {showResults && (
                <div className="text-2xl font-bold mb-4">
                  {headsCount} Heads • {tailsCount} Tails
                </div>
              )}
              
              {coinCount > 1 && showResults && (
                <div className="w-full bg-white/30 h-8 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary flex items-center justify-center text-white font-medium"
                    style={{ width: `${(headsCount / flippedCoins.length) * 100}%` }}
                  >
                    {flippedCoins.length > 0 && `${Math.round((headsCount / flippedCoins.length) * 100)}%`}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinFlipper;
