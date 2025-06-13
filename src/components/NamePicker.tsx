
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Shuffle } from 'lucide-react';
import TeamInput from './TeamInput';

const NamePicker: React.FC = () => {
  const [names, setNames] = useState<string>('');
  const [namesArray, setNamesArray] = useState<string[]>([]);
  const [pickedName, setPickedName] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Parse names input into array
  useEffect(() => {
    // Split by new lines and commas only (not spaces)
    const splitByLineAndComma = names
      .split(/[\n,]+/)
      .map(part => part.trim())
      .filter(Boolean);
    
    setNamesArray(splitByLineAndComma);
  }, [names]);

  const pickRandomName = () => {
    if (namesArray.length === 0) {
      toast.error('Please add at least one name');
      return;
    }

    setIsAnimating(true);
    
    // Simulate "shuffling" for 1 second
    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * namesArray.length);
      setPickedName(namesArray[randomIndex]);
      count++;
      
      if (count > 10) {
        clearInterval(interval);
        setIsAnimating(false);
        toast.success('Random name picked!');
      }
    }, 100);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-16">
      <div className="flex flex-col gap-6 mb-10">
        <div className="w-full animate-slide-up">
          <TeamInput 
            names={names} 
            setNames={setNames}
            instruction="Enter names (separated by comma or new line)"
          />
        </div>
        
        <div className="w-full animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="glass rounded-2xl p-6">
            <button
              onClick={pickRandomName}
              disabled={namesArray.length < 1}
              className={`w-full py-4 px-6 rounded-xl text-white font-medium flex items-center justify-center transition-all duration-300 gap-2
                ${namesArray.length < 1
                  ? 'bg-muted cursor-not-allowed' 
                  : 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]'
                }`}
              aria-label="Pick random name"
            >
              <Shuffle className="h-5 w-5" />
              <span>Pick Random Name</span>
            </button>
          </div>
        </div>
      </div>
      
      {pickedName && (
        <div id="result" className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className={`glass rounded-2xl p-8 text-center ${isAnimating ? 'animate-pulse-light' : ''}`}>
            <h2 className="text-xl font-medium mb-4 text-primary">Selected Name</h2>
            <div className="text-4xl font-bold my-6 text-foreground">
              {pickedName}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NamePicker;
