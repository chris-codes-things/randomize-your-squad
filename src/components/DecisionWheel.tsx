
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { CircleDashed, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import TeamInput from './TeamInput';

const DecisionWheel: React.FC = () => {
  const [options, setOptions] = useState<string>('');
  const [optionsArray, setOptionsArray] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showWinnerDialog, setShowWinnerDialog] = useState(false);
  
  // Parse options input into array
  useEffect(() => {
    const splitByLineAndComma = options
      .split(/[\n,]+/)
      .map(part => part.trim())
      .filter(Boolean);
    
    setOptionsArray(splitByLineAndComma);
  }, [options]);
  
  const getSegmentColors = () => {
    const colors = [
      '#4F46E5', '#7C3AED', '#EC4899', '#F97316', 
      '#EAB308', '#22C55E', '#06B6D4', '#3B82F6'
    ];
    return colors;
  };
  
  const spinWheel = () => {
    if (optionsArray.length < 2) {
      toast.error('Please add at least two options');
      return;
    }
    
    setIsSpinning(true);
    setSelectedOption(null);
    
    // Generate random spins (5-10 full rotations + random angle)
    const spins = 5 + Math.random() * 5;
    const finalAngle = Math.random() * 360;
    const totalRotation = rotation + (spins * 360) + finalAngle;
    
    setRotation(totalRotation);
    
    // Calculate which option is selected after spin
    setTimeout(() => {
      const normalizedAngle = (360 - (totalRotation % 360)) % 360;
      const segmentSize = 360 / optionsArray.length;
      const selectedIndex = Math.floor(normalizedAngle / segmentSize);
      const winner = optionsArray[selectedIndex];
      
      setSelectedOption(winner);
      setIsSpinning(false);
      setShowWinnerDialog(true);
      toast.success('Wheel has chosen!');
    }, 3000);
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-16">
      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        <div className="w-full lg:w-1/3 animate-slide-up">
          <TeamInput 
            names={options} 
            setNames={setOptions}
            instruction="Enter options (separated by comma or new line)"
          />
          
          <div className="mt-4 glass rounded-2xl p-6">
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
                <div className="relative w-80 h-80">
                  {/* Pointer */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500"></div>
                  </div>
                  
                  {/* Wheel */}
                  <div 
                    className="w-full h-full rounded-full relative overflow-hidden border-4 border-white shadow-lg"
                    style={{ 
                      transform: `rotate(${rotation}deg)`,
                      transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.15, 0.99)' : 'none'
                    }}
                  >
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      {optionsArray.map((option, index) => {
                        const colors = getSegmentColors();
                        const segmentAngle = 360 / optionsArray.length;
                        const startAngle = index * segmentAngle;
                        const endAngle = startAngle + segmentAngle;
                        
                        const startAngleRad = (startAngle * Math.PI) / 180;
                        const endAngleRad = (endAngle * Math.PI) / 180;
                        
                        const x1 = 100 + 90 * Math.cos(startAngleRad);
                        const y1 = 100 + 90 * Math.sin(startAngleRad);
                        const x2 = 100 + 90 * Math.cos(endAngleRad);
                        const y2 = 100 + 90 * Math.sin(endAngleRad);
                        
                        const largeArcFlag = segmentAngle > 180 ? 1 : 0;
                        
                        const pathData = [
                          `M 100 100`,
                          `L ${x1} ${y1}`,
                          `A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                          'Z'
                        ].join(' ');
                        
                        const textAngle = startAngle + segmentAngle / 2;
                        const textAngleRad = (textAngle * Math.PI) / 180;
                        const textX = 100 + 60 * Math.cos(textAngleRad);
                        const textY = 100 + 60 * Math.sin(textAngleRad);
                        
                        return (
                          <g key={index}>
                            <path
                              d={pathData}
                              fill={colors[index % colors.length]}
                              stroke="white"
                              strokeWidth="2"
                            />
                            <text
                              x={textX}
                              y={textY}
                              fill="white"
                              fontSize="12"
                              fontWeight="bold"
                              textAnchor="middle"
                              dominantBaseline="middle"
                              transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                            >
                              {option.length > 8 ? option.substring(0, 8) + '...' : option}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground text-center p-6">
                Add some options to start spinning the wheel
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Dialog open={showWinnerDialog} onOpenChange={setShowWinnerDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-primary">
              🎉 Winner! 🎉
            </DialogTitle>
            <DialogDescription className="text-center text-lg pt-4">
              The wheel has chosen:
            </DialogDescription>
          </DialogHeader>
          <div className="text-center py-6">
            <div className="text-3xl font-bold text-foreground bg-primary/10 rounded-lg py-4 px-6">
              {selectedOption}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DecisionWheel;
