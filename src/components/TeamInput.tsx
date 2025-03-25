
import React from 'react';
import { Users } from 'lucide-react';

interface TeamInputProps {
  names: string;
  setNames: React.Dispatch<React.SetStateAction<string>>;
  instruction?: string;
}

const TeamInput: React.FC<TeamInputProps> = ({ 
  names, 
  setNames,
  instruction = "Enter names (separated by comma, new line, or space)"
}) => {
  return (
    <div className="w-full animate-slide-up">
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center mb-3">
          <Users className="mr-2 h-5 w-5 text-primary" />
          <h2 className="card-header !mb-0">Add Names</h2>
        </div>
        
        <div className="text-sm text-muted-foreground mb-4">
          {instruction}
        </div>
        
        <textarea
          value={names}
          onChange={(e) => setNames(e.target.value)}
          className="w-full h-36 p-3 rounded-xl bg-white/50 border border-border input-focus-ring resize-none"
          placeholder="John Doe, Jane Smith, Mark Johnson..."
          aria-label="Names input"
        />
      </div>
    </div>
  );
};

export default TeamInput;
