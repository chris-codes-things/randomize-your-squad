
import React from 'react';
import { Shuffle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full text-center py-8 sm:py-12 animate-fade-in">
      <div className="flex items-center justify-center mb-2">
        <Shuffle className="h-8 w-8 text-primary mr-2" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Team Randomizer
        </h1>
      </div>
      <p className="text-muted-foreground max-w-2xl mx-auto px-4">
        Create random teams quickly and easily. Enter names, choose the number of teams, and click randomize.
      </p>
    </header>
  );
};

export default Header;
