
import React from 'react';
import { Shuffle } from 'lucide-react';

interface TeamControlsProps {
  teamCount: number;
  setTeamCount: React.Dispatch<React.SetStateAction<number>>;
  onRandomize: () => void;
  isDisabled: boolean;
  namesCount: number;
}

const TeamControls: React.FC<TeamControlsProps> = ({ 
  teamCount, 
  setTeamCount, 
  onRandomize, 
  isDisabled,
  namesCount
}) => {
  const handleTeamCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow empty input (will be handled as 2 on blur)
    if (value === '') {
      setTeamCount(2);
      return;
    }
    
    // Parse the input value
    const parsedValue = parseInt(value);
    
    // Only update if it's a valid number
    if (!isNaN(parsedValue)) {
      // Enforce min/max constraints
      const constrainedValue = Math.max(2, Math.min(namesCount || 2, parsedValue));
      setTeamCount(constrainedValue);
    }
  };

  return (
    <div className="w-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="glass rounded-2xl p-6">
        <h2 className="card-header">Team Settings</h2>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <div className="w-full sm:w-40">
            <label htmlFor="teamCount" className="block text-sm font-medium text-muted-foreground mb-2">
              Number of Teams
            </label>
            <input
              id="teamCount"
              type="number"
              min="2"
              max={Math.max(2, namesCount)}
              value={teamCount}
              onChange={handleTeamCountChange}
              className="w-full p-3 rounded-xl bg-white/50 border border-border input-focus-ring"
              aria-label="Number of teams"
            />
          </div>
          
          <div className="text-sm text-muted-foreground mt-2 sm:mt-8 flex-1">
            {namesCount > 0 ? (
              <span>
                Creating {teamCount} teams with 
                {namesCount % teamCount === 0 
                  ? ` ${namesCount / teamCount} people per team` 
                  : ` approximately ${Math.floor(namesCount / teamCount)} - ${Math.ceil(namesCount / teamCount)} people per team`}
              </span>
            ) : (
              <span>Add names to start generating teams</span>
            )}
          </div>
        </div>
        
        <button
          onClick={onRandomize}
          disabled={isDisabled}
          className={`w-full py-4 px-6 rounded-xl text-white font-medium flex items-center justify-center transition-all duration-300 gap-2
            ${isDisabled 
              ? 'bg-muted cursor-not-allowed' 
              : 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]'
            }`}
          aria-label="Randomize teams"
        >
          <Shuffle className="h-5 w-5" />
          <span>Randomize Teams</span>
        </button>
      </div>
    </div>
  );
};

export default TeamControls;
