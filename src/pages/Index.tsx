
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import TeamGenerator from '../components/TeamGenerator';
import { Users, User, Dice3, Coins, CircleDashed } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6">
      <Helmet>
        <title>Team Randomizer - Easy Random Team & Group Generator Tool</title>
        <meta name="description" content="Free random team generator tool. Quickly create random groups from a list of names for school, work, or events. Simple, fast, and mobile-friendly." />
        <meta name="keywords" content="random team generator, random group generator, team randomizer, create random teams, split into groups, team maker, random group creator, fair team selection, classroom groups, project teams" />
      </Helmet>
      
      <div className="w-full max-w-6xl mx-auto px-4 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Team Randomizer</h1>
          <p className="text-muted-foreground mt-2">Create random teams from your list of names</p>
        </div>
      
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
          <Link 
            to="/coin-flip" 
            className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg text-foreground"
          >
            <Coins size={18} />
            <span>Coin Flip</span>
          </Link>
          <Link 
            to="/decision-wheel" 
            className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg text-foreground"
          >
            <CircleDashed size={18} />
            <span>Decision Wheel</span>
          </Link>
        </nav>
      </div>
      
      <TeamGenerator />

      <div className="w-full max-w-4xl mx-auto px-6 py-10 bg-white/80 backdrop-blur-sm rounded-xl mt-10 shadow-sm">
        <h2 className="text-2xl font-bold text-primary mb-4">How to Use Our Team Randomizer</h2>
        <p className="mb-4">Our free random team generator makes it quick and easy to create balanced groups from any list of names. Perfect for teachers, coaches, event organizers, or anyone who needs to divide people into fair teams.</p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Why Use a Random Team Generator?</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Creates truly random, unbiased teams</li>
          <li>Saves time compared to manual selection</li>
          <li>Ensures fair distribution of participants</li>
          <li>Eliminates favoritism in team selection</li>
          <li>Adds an element of fun to team creation</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Common Uses for Our Team Generator</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Education</h4>
            <p className="text-sm">Create balanced student groups for projects, activities, labs, or classroom games.</p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Sports &amp; Recreation</h4>
            <p className="text-sm">Form fair teams for pickup games, recreational leagues, or training sessions.</p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Workplace</h4>
            <p className="text-sm">Divide employees for team-building exercises, brainstorming sessions, or company events.</p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Social Events</h4>
            <p className="text-sm">Create balanced teams for parties, family gatherings, or friendly competitions.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Frequently Asked Questions</h3>
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-medium text-primary">Is this team generator truly random?</h4>
            <p className="text-sm">Yes! Our team generator uses a cryptographically secure random algorithm to ensure completely unbiased team selection.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary">Can I save my teams after they're generated?</h4>
            <p className="text-sm">While we don't currently offer team saving, you can easily copy and paste the results or take a screenshot for future reference.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary">Is there a limit to how many names I can enter?</h4>
            <p className="text-sm">No, our tool can handle large groups and create as many teams as you need.</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-primary/10 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-2">Try Our Other Random Tools</h3>
          <p className="mb-3">Looking for more randomization tools? Check out our number picker, dice roller, coin flipper, and decision wheel!</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/name-picker" className="text-sm text-primary hover:underline">Number Generator →</Link>
            <Link to="/dice-roller" className="text-sm text-primary hover:underline">Dice Roller →</Link>
            <Link to="/coin-flip" className="text-sm text-primary hover:underline">Coin Flip →</Link>
            <Link to="/decision-wheel" className="text-sm text-primary hover:underline">Decision Wheel →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
