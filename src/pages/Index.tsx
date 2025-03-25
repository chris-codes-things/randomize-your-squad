
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import TeamGenerator from '../components/TeamGenerator';
import { Users, User, Dice3 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6">
      <Helmet>
        <title>Team Randomizer - Easy Random Team & Group Generator Tool</title>
        <meta name="description" content="Free random team generator tool. Quickly create random groups from a list of names for school, work, or events. Simple, fast, and mobile-friendly." />
      </Helmet>
      
      <div className="w-full max-w-6xl mx-auto px-4 pb-8">
        <nav className="w-full mb-8 glass rounded-xl p-4 flex flex-wrap justify-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            <Users size={18} />
            <span>Team Generator</span>
          </Link>
          <Link 
            to="/name-picker" 
            className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg text-foreground"
          >
            <User size={18} />
            <span>Name Picker</span>
          </Link>
          <Link 
            to="/dice-roller" 
            className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg text-foreground"
          >
            <Dice3 size={18} />
            <span>Dice Roller</span>
          </Link>
        </nav>
      </div>
      
      <TeamGenerator />
    </div>
  );
};

export default Index;
