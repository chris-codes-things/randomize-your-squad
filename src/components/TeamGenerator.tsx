import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import Header from './Header';
import TeamInput from './TeamInput';
import TeamControls from './TeamControls';
import TeamResults from './TeamResults';
import { Users, Settings } from 'lucide-react';

const TeamGenerator: React.FC = () => {
  const [names, setNames] = useState<string>('');
  const [teamCount, setTeamCount] = useState<number>(2);
  const [teams, setTeams] = useState<string[][]>([]);
  const [namesArray, setNamesArray] = useState<string[]>([]);

  // Parse names input into array
  useEffect(() => {
    // First split by new lines and commas
    const splitByLineAndComma = names
      .split(/[\n,]+/)
      .map(part => part.trim())
      .filter(Boolean);
    
    // Then process each chunk to split by spaces if needed
    const result: string[] = [];
    splitByLineAndComma.forEach(chunk => {
      // If the chunk has multiple words separated by spaces, split it
      const words = chunk.split(/\s+/).filter(Boolean);
      result.push(...words);
    });
    
    setNamesArray(result);
  }, [names]);

  const randomizeTeams = () => {
    if (namesArray.length === 0) {
      toast.error('Please add at least one name');
      return;
    }

    if (teamCount <= 0 || teamCount > namesArray.length) {
      toast.error(`Number of teams must be between 1 and ${namesArray.length}`);
      return;
    }

    // Shuffle names using Fisher-Yates algorithm
    const shuffled = [...namesArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Distribute names into teams
    const result: string[][] = Array(teamCount).fill(null).map(() => []);
    
    shuffled.forEach((name, index) => {
      const teamIndex = index % teamCount;
      result[teamIndex].push(name);
    });

    setTeams(result);
    toast.success('Teams randomized successfully!');
    
    // Scroll to results after a brief delay
    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-16">
      <Header />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="glass rounded-2xl h-full">
          <div className="flex items-center mb-4 p-6 pb-0">
            <Users className="mr-2 h-5 w-5 text-primary" />
            <h2 className="card-header !mb-0">Add Names</h2>
          </div>
          <div className="p-6 pt-0">
            <textarea
              value={names}
              onChange={(e) => setNames(e.target.value)}
              className="w-full h-36 p-3 rounded-xl bg-white/50 border border-border input-focus-ring resize-none"
              placeholder="John Doe, Jane Smith, Mark Johnson..."
              aria-label="Names input"
            />
          </div>
        </div>
        
        <div className="glass rounded-2xl h-full">
          <div className="flex items-center mb-4 p-6 pb-0">
            <Settings className="mr-2 h-5 w-5 text-primary" />
            <h2 className="card-header !mb-0">Team Settings</h2>
          </div>
          <div className="p-6 pt-0">
            <TeamControls 
              teamCount={teamCount}
              setTeamCount={setTeamCount}
              onRandomize={randomizeTeams}
              isDisabled={namesArray.length < 2}
              namesCount={namesArray.length}
            />
          </div>
        </div>
      </div>
      
      <div id="results" className="mt-8">
        <TeamResults teams={teams} />
      </div>
    </div>
  );
};

export default TeamGenerator;
