
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { CircleDashed, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TeamInput from './TeamInput';

const DecisionWheel: React.FC = () => {
  const [options, setOptions] = useState<string>('');
  const [optionsArray, setOptionsArray] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  
  // Parse options input into array
  useEffect(() => {
    // First split by new lines and commas
    const splitByLineAndComma = options
      .split(/[\n,]+/)
      .map(part => part.trim())
      .filter(Boolean);
    
    // Then process each chunk to split by spaces if needed
    const result: string[] = [];
    splitByLineAndComma.forEach(chunk => {
      // If the chunk contains multiple words with spaces between them,
      // treat it as a single option rather than splitting further
      if (chunk) result.push(chunk);
    });
    
    setOptionsArray(result);
  }, [options]);
  
  const spinWheel = () => {
    if (optionsArray.length < 2) {
      toast.error('Please add at least two options');
      return;
    }
    
    setIsSpinning(true);
    setSelectedOption(null);
    
    // Generate random angle between 2000 and 5000 degrees
    const spinAngle = 2000 + Math.random() * 3000;
    
    // Add to current rotation for continuous spinning
    const newRotation = rotationAngle + spinAngle;
    setRotationAngle(newRotation);
    
    // Determine which option is selected
    setTimeout(() => {
      // Calculate the final position (reduce to 0-360 degrees)
      const normalizedAngle = newRotation % 360;
      
      // Calculate which option is at the top (opposite of the rotation point)
      // Each option takes up (360 / optionsArray.length) degrees
      const optionIndex = Math.floor(((360 - normalizedAngle) % 360) / (360 / optionsArray.length));
      
      setSelectedOption(optionsArray[optionIndex % optionsArray.length]);
      setIsFlipping(false);
      toast.success('Decision made!');
    }, 3000); // Match this with CSS duration
  };
  
  const getWheelColors = () => {
    const baseColors = [
      '#4F46E5', // primary indigo
      '#7C3AED', // purple
      '#EC4899', // pink
      '#F97316', // orange
      '#EAB308', // yellow
      '#22C55E', // green
      '#06B6D4', // cyan
      '#3B82F6', // blue
    ];
    
    // Repeat colors if needed
    const colors = [];
    for (let i = 0; i < optionsArray.length; i++) {
      colors.push(baseColors[i % baseColors.length]);
    }
    
    return colors;
  };
  
  const renderWheel = () => {
    if (optionsArray.length === 0) return null;
    
    const colors = getWheelColors();
    const segmentAngle = 360 / optionsArray.length;
    
    return (
      <div className="relative w-full max-w-md mx-auto aspect-square">
        {/* Triangle marker at top */}
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ 
            width: '0', 
            height: '0', 
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderTop: '30px solid #ef4444' 
          }}
        />
        
        {/* Spinning wheel */}
        <div 
          ref={wheelRef}
          className="w-full h-full rounded-full overflow-hidden relative"
          style={{ 
            transform: `rotate(${rotationAngle}deg)`,
            transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.15, 0.99)' : 'none'
          }}
        >
          {optionsArray.map((option, index) => {
            // Calculate the exact angle for this segment
            const startAngle = index * segmentAngle;
            
            // Return the segment
            return (
              <div 
                key={index}
                className="absolute overflow-hidden"
                style={{ 
                  top: '0',
                  left: '0',
                  width: '100%', 
                  height: '100%',
                  transform: `rotate(${startAngle}deg)`,
                  transformOrigin: 'center'
                }}
              >
                <div 
                  style={{
                    backgroundColor: colors[index],
                    position: 'absolute',
                    width: '50%',
                    height: '100%',
                    right: '0',
                    transformOrigin: 'left center',
                    transform: segmentAngle === 180 ? 'none' : `rotate(${segmentAngle / 2}deg)`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    zIndex: optionsArray.length - index
                  }}
                >
                  <div 
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    style={{
                      transform: `rotate(${90 - segmentAngle / 2}deg) translateY(-50%)`,
                      top: '50%',
                      width: '150%',
                      left: optionsArray.length <= 2 ? '40%' : 
                             optionsArray.length <= 4 ? '30%' : 
                             optionsArray.length <= 6 ? '25%' : '20%',
                    }}
                  >
                    <div 
                      className="text-white font-medium text-center whitespace-nowrap overflow-hidden text-ellipsis"
                      style={{
                        fontSize: optionsArray.length > 8 ? '0.6rem' : 
                                optionsArray.length > 5 ? '0.7rem' : '0.85rem',
                        maxWidth: optionsArray.length <= 3 ? '100px' : 
                                 optionsArray.length <= 6 ? '80px' : '60px',
                        transform: optionsArray.length === 2 ? 'rotate(90deg)' : 'none',
                      }}
                    >
                      {option}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Center dot and border */}
          <div className="absolute inset-0 rounded-full border-4 border-white/60 pointer-events-none"></div>
          <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-16">
      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        <div className="w-full lg:w-1/3 animate-slide-up">
          <div className="glass rounded-2xl p-6 h-full flex flex-col">
            <div className="flex items-center mb-4">
              <CircleDashed className="mr-2 h-5 w-5 text-primary" />
              <h2 className="card-header !mb-0">Add Options</h2>
            </div>
            
            <div className="flex-1 mb-4">
              <TeamInput 
                names={options} 
                setNames={setOptions}
                instruction="Enter options (one per line or separated by comma)"
              />
            </div>
            
            <Button
              onClick={spinWheel}
              disabled={optionsArray.length < 2 || isSpinning}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCw className={`h-5 w-5 ${isSpinning ? 'animate-spin' : ''}`} />
              <span>Spin The Wheel</span>
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-2/3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="glass rounded-2xl p-6 h-full flex flex-col">
            <div className="flex items-center mb-4">
              <CircleDashed className="mr-2 h-5 w-5 text-primary" />
              <h2 className="card-header !mb-0">Decision Wheel</h2>
            </div>
            
            {optionsArray.length > 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center">
                {renderWheel()}
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground text-center p-6">
                Add some options to start spinning the wheel
              </div>
            )}
          </div>
        </div>
      </div>
      
      {selectedOption && (
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass rounded-2xl p-8 text-center">
            <h2 className="text-xl font-medium mb-4 text-primary">Your Decision</h2>
            <div className="text-4xl font-bold my-6 text-foreground">
              {selectedOption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DecisionWheel;
