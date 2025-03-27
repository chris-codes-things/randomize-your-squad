
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Shuffle, CheckSquare, Hash } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const RandomNumberGenerator: React.FC = () => {
  const [minNumber, setMinNumber] = useState<number>(1);
  const [maxNumber, setMaxNumber] = useState<number>(100);
  const [count, setCount] = useState<number>(1);
  const [noRepeats, setNoRepeats] = useState<boolean>(false);
  const [showRanking, setShowRanking] = useState<boolean>(true);
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const validateInputs = (): boolean => {
    if (minNumber >= maxNumber) {
      toast.error('Minimum must be less than maximum');
      return false;
    }

    const range = maxNumber - minNumber + 1;
    if (noRepeats && count > range) {
      toast.error(`Cannot generate ${count} unique numbers in the range ${minNumber}-${maxNumber}`);
      return false;
    }

    if (count < 1) {
      toast.error('Please generate at least one number');
      return false;
    }

    if (count > 100) {
      toast.error('Please generate 100 numbers or less');
      return false;
    }

    return true;
  };

  const generateNumbers = () => {
    if (!validateInputs()) return;

    setIsAnimating(true);
    
    // Simulate "shuffling" for a short time
    let animationCount = 0;
    const animationInterval = setInterval(() => {
      const tempNumbers: number[] = [];
      
      for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        tempNumbers.push(randomNum);
      }
      
      setGeneratedNumbers(tempNumbers);
      animationCount++;
      
      if (animationCount > 8) {
        clearInterval(animationInterval);
        
        // Generate the final numbers
        if (noRepeats) {
          generateUniqueNumbers();
        } else {
          generateRandomNumbers();
        }
        
        setIsAnimating(false);
        toast.success('Numbers generated!');
      }
    }, 100);
  };

  const generateRandomNumbers = () => {
    const result: number[] = [];
    
    for (let i = 0; i < count; i++) {
      const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      result.push(randomNum);
    }
    
    setGeneratedNumbers(result);
  };

  const generateUniqueNumbers = () => {
    // Create an array with all possible numbers in the range
    const allPossibleNumbers: number[] = [];
    for (let i = minNumber; i <= maxNumber; i++) {
      allPossibleNumbers.push(i);
    }
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = allPossibleNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allPossibleNumbers[i], allPossibleNumbers[j]] = 
        [allPossibleNumbers[j], allPossibleNumbers[i]];
    }
    
    // Take the first 'count' elements
    setGeneratedNumbers(allPossibleNumbers.slice(0, count));
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-16">
      <div className="flex flex-col gap-6 mb-10">
        <div className="w-full animate-slide-up">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Hash className="mr-2 h-5 w-5 text-primary" />
              <h2 className="card-header !mb-0">Random Number Generator</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Minimum Value
                </label>
                <Input
                  type="number"
                  value={minNumber}
                  onChange={(e) => setMinNumber(parseInt(e.target.value) || 0)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Maximum Value
                </label>
                <Input
                  type="number"
                  value={maxNumber}
                  onChange={(e) => setMaxNumber(parseInt(e.target.value) || 0)}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  How many numbers to generate? (1-100)
                </label>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                  className="w-full"
                />
              </div>
              
              <div className="flex flex-col space-y-4 self-end mb-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="noRepeats" 
                    checked={noRepeats}
                    onCheckedChange={(checked) => setNoRepeats(checked === true)}
                  />
                  <label 
                    htmlFor="noRepeats" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    No repeated numbers
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="showRanking" 
                    checked={showRanking}
                    onCheckedChange={(checked) => setShowRanking(checked === true)}
                  />
                  <label 
                    htmlFor="showRanking" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Show ranking/order
                  </label>
                </div>
              </div>
            </div>
            
            <Button
              onClick={generateNumbers}
              disabled={isAnimating}
              className={`w-full py-3 px-5 rounded-xl text-white font-medium flex items-center justify-center transition-all duration-300 gap-2
                ${isAnimating
                  ? 'bg-muted cursor-not-allowed' 
                  : 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]'
                }`}
            >
              <Shuffle className={`h-5 w-5 ${isAnimating ? 'animate-spin' : ''}`} />
              <span>Generate Numbers</span>
            </Button>
          </div>
        </div>
      </div>
      
      {generatedNumbers.length > 0 && (
        <div id="result" className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className={`glass rounded-2xl p-8 text-center ${isAnimating ? 'animate-pulse-light' : ''}`}>
            <h2 className="text-xl font-medium mb-4 text-primary">Generated Numbers</h2>
            <div className="flex flex-wrap justify-center gap-4 my-6">
              {generatedNumbers.map((num, index) => (
                <div
                  key={index}
                  className={`relative w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold
                    ${isAnimating 
                      ? 'animate-bounce-light bg-primary/80 text-white'
                      : 'bg-white/90 text-foreground shadow'
                    }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {showRanking && (
                    <div className="absolute -top-3 -left-2 bg-primary text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  )}
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
