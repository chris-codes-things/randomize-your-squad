
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Info } from 'lucide-react';

const DiceRoller: React.FC = () => {
  const [diceCount, setDiceCount] = useState(1);
  const [diceResults, setDiceResults] = useState<number[]>([]);
  const [isRolling, setIsRolling] = useState(false);
  const [showTotal, setShowTotal] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  
  const getDiceIcon = (value: number) => {
    switch (value) {
      case 1: return <Dice1 className="h-full w-full" />;
      case 2: return <Dice2 className="h-full w-full" />;
      case 3: return <Dice3 className="h-full w-full" />;
      case 4: return <Dice4 className="h-full w-full" />;
      case 5: return <Dice5 className="h-full w-full" />;
      case 6: return <Dice6 className="h-full w-full" />;
      default: return <Dice1 className="h-full w-full" />;
    }
  };

  // Add space bar listener for dice rolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isRolling && !e.repeat && 
          !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        rollDice();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRolling]);

  const rollDice = () => {
    if (diceCount < 1 || diceCount > 10) {
      toast.error('Please choose between 1 and 10 dice');
      return;
    }

    setIsRolling(true);
    setShowTotal(false);
    
    let count = 0;
    const interval = setInterval(() => {
      const results = Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
      setDiceResults(results);
      count++;
      
      if (count > 8) {
        clearInterval(interval);
        setIsRolling(false);
        setShowTotal(true);
        toast.success('Dice rolled!');
        
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

  const handleDiceCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value === '') {
      setDiceCount(1);
      return;
    }
    
    const parsedValue = parseInt(value);
    
    if (!isNaN(parsedValue)) {
      const constrainedValue = Math.max(1, Math.min(10, parsedValue));
      setDiceCount(constrainedValue);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-16">
      <div className="flex flex-col gap-6 mb-10" ref={controlsRef}>
        <div className="w-full animate-slide-up">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Dice3 className="mr-2 h-5 w-5 text-primary" />
              <h2 className="card-header !mb-0">Dice Settings</h2>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-3">
              <div>
                <label htmlFor="diceCount" className="block text-sm font-medium text-muted-foreground mb-2">
                  Number of Dice
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="diceCount"
                    type="number"
                    min="1"
                    max="10"
                    value={diceCount}
                    onChange={handleDiceCountChange}
                    className="w-24 p-3 rounded-xl bg-white/50 border border-border input-focus-ring"
                    aria-label="Number of dice"
                  />
                  <span className="text-muted-foreground">
                    {diceCount === 1 ? 'die' : 'dice'}
                  </span>
                </div>
              </div>
              
              <button
                onClick={rollDice}
                className="py-3 px-6 h-[48px] rounded-xl text-white font-medium flex items-center justify-center transition-all duration-300 gap-2 bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                aria-label="Roll dice"
                disabled={isRolling}
              >
                <Dice3 className="h-5 w-5" />
                <span>Roll {diceCount > 1 ? 'Dice' : 'Die'}</span>
              </button>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
              <Info className="h-4 w-4" />
              <p>Press the space bar to roll the dice quickly</p>
            </div>
          </div>
        </div>
      </div>
      
      {diceResults.length > 0 && (
        <div id="result" ref={resultsRef} className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className={`glass rounded-2xl p-8 text-center ${isRolling ? 'animate-pulse-light' : ''}`}>
            <h2 className="text-xl font-medium mb-4 text-primary">Dice Results</h2>
            
            <div className="flex flex-wrap justify-center gap-4 my-6">
              {diceResults.map((result, index) => (
                <div 
                  key={index} 
                  className={`relative w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-md text-primary ${isRolling ? 'animate-bounce-light' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {getDiceIcon(result)}
                </div>
              ))}
            </div>
            
            {diceResults.length > 1 && showTotal && (
              <div className="mt-6 text-lg font-semibold">
                Total: {diceResults.reduce((sum, val) => sum + val, 0)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiceRoller;
