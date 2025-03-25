
import React from 'react';

interface TeamInputProps {
  names: string;
  setNames: React.Dispatch<React.SetStateAction<string>>;
}

const TeamInput: React.FC<TeamInputProps> = ({ names, setNames }) => {
  return (
    <div className="w-full animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <div className="glass rounded-2xl p-6">
        <h2 className="card-header">Add Names</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Enter names separated by a new line, comma, or space
        </p>
        <textarea
          value={names}
          onChange={(e) => setNames(e.target.value)}
          className="w-full h-40 p-4 rounded-xl bg-white/50 border border-border input-focus-ring"
          placeholder="John Doe&#10;Jane Smith&#10;Alex Johnson&#10;..."
          aria-label="Enter participant names"
        />
      </div>
    </div>
  );
};

export default TeamInput;
