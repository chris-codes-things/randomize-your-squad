
import React from 'react';
import { Users } from 'lucide-react';

interface TeamResultsProps {
  teams: string[][];
}

const TeamResults: React.FC<TeamResultsProps> = ({ teams }) => {
  if (teams.length === 0) return null;

  return (
    <div className="w-full animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-2xl font-bold mb-6 text-center">Your Teams</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, teamIndex) => (
          <div key={teamIndex} className="team-card animate-scale-in" style={{ animationDelay: `${0.1 * teamIndex}s` }}>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Team {teamIndex + 1}</h3>
            </div>
            
            <ul className="space-y-2">
              {team.map((member, memberIndex) => (
                <li 
                  key={`${teamIndex}-${memberIndex}`} 
                  className="py-2 px-3 rounded-lg bg-secondary/50 text-foreground"
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamResults;
