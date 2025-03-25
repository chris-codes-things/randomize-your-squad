
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
  return (
    <div className="w-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="glass rounded-2xl p-6">
        <h2 className="card-header">Team Settings</h2>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <div className="flex-1 w-full sm:w-auto">
            <label htmlFor="teamCount" className="block text-sm font-medium text-muted-foreground mb-2">
              Number of Teams
            </label>
            <input
              id="teamCount"
              type="number"
              min="2"
              max={Math.max(2, namesCount)}
              value={teamCount}
              onChange={(e) => setTeamCount(Math.max(2, Math.min(namesCount, parseInt(e.target.value) || 2)))}
              className="w-full p-3 rounded-xl bg-white/50 border border-border input-focus-ring"
              aria-label="Number of teams"
            />
          </div>
          
          <div className="text-sm text-muted-foreground mt-2 sm:mt-8">
            {namesCount > 0 ? (
              <span>
                Creating {teamCount} teams with approximately {' '}
                {namesCount > 0 ? Math.ceil(namesCount / teamCount) : 0} - {' '}
                {namesCount > 0 ? Math.floor(namesCount / teamCount) + 1 : 0} people per team
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
