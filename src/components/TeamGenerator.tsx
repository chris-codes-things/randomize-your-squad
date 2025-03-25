
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import Header from './Header';
import TeamInput from './TeamInput';
import TeamControls from './TeamControls';
import TeamResults from './TeamResults';

const TeamGenerator: React.FC = () => {
  const [names, setNames] = useState<string>('');
  const [teamCount, setTeamCount] = useState<number>(2);
  const [teams, setTeams] = useState<string[][]>([]);
  const [namesArray, setNamesArray] = useState<string[]>([]);

  // Parse names input into array
  useEffect(() => {
    // Split by new lines, commas, or spaces, and filter out empty entries
    const parsed = names
      .split(/[\n,]+/)
      .map(name => name.trim())
      .filter(name => name !== '');
    
    setNamesArray(parsed);
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
      
      <div className="flex flex-col gap-6 mb-10">
        <TeamInput names={names} setNames={setNames} />
        
        <TeamControls 
          teamCount={teamCount}
          setTeamCount={setTeamCount}
          onRandomize={randomizeTeams}
          isDisabled={namesArray.length < 2}
          namesCount={namesArray.length}
        />
      </div>
      
      <div id="results" className="mt-8">
        <TeamResults teams={teams} />
      </div>
    </div>
  );
};

export default TeamGenerator;
