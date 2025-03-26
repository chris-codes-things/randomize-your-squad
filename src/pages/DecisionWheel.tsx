
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DecisionWheel from '../components/DecisionWheel';
import { Users, User, Dice3, Coins, CircleDashed } from 'lucide-react';

const DecisionWheelPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6">
      <Helmet>
        <title>Decision Wheel - Free Online Random Choice Picker Tool</title>
        <meta name="description" content="Free decision wheel tool. Randomly select from your options for fair decision making. Simple, free, and mobile-friendly wheel of fortune style picker." />
        <meta name="keywords" content="decision wheel, random picker, spin wheel, wheel of names, random choice maker, random decision, choice spinner, decision maker, wheel of fortune, spinner wheel, random selector" />
        <link rel="canonical" href="https://teamrandomizer.com/decision-wheel" />
        <meta property="og:title" content="Decision Wheel - Free Online Random Choice Picker Tool" />
        <meta property="og:description" content="Randomly select from your options for fair decision making. Simple wheel of fortune style decision tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamrandomizer.com/decision-wheel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Decision Wheel - Free Online Random Choice Picker Tool" />
        <meta name="twitter:description" content="Spin the wheel to make random decisions between multiple options." />
      </Helmet>
      
      <div className="w-full max-w-6xl mx-auto px-4 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Decision Wheel</h1>
          <p className="text-muted-foreground mt-2">Spin the wheel to make random decisions</p>
        </div>
      
        <nav className="w-full mb-8 glass rounded-xl p-4 flex flex-wrap justify-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg text-foreground"
          >
            <Users size={18} />
            <span>Team Generator</span>
          </Link>
          <Link 
            to="/name-picker" 
            className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg text-foreground"
          >
            <User size={18} />
            <span>Number Generator</span>
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
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            <CircleDashed size={18} />
            <span>Decision Wheel</span>
          </Link>
        </nav>
      </div>
      
      <DecisionWheel />

      <div className="w-full max-w-4xl mx-auto px-6 py-10 bg-white/80 backdrop-blur-sm rounded-xl mt-10 shadow-sm">
        <h2 className="text-2xl font-bold text-primary mb-4">About Our Decision Wheel</h2>
        <p className="mb-4">Our free decision wheel (also known as a spin wheel or wheel of fortune) helps you make random selections from multiple options. With a colorful interface and engaging spin animation, it makes decision-making fun and fair.</p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Why Use a Decision Wheel?</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Provides a completely random and unbiased selection</li>
          <li>Makes decision-making more engaging and fun</li>
          <li>Visualizes all options clearly on the wheel</li>
          <li>Eliminates decision fatigue when choosing between multiple options</li>
          <li>Creates a sense of anticipation and excitement with the spinning animation</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Popular Uses for Our Decision Wheel</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Classroom Activities</h4>
            <p className="text-sm">Randomly select students for participation, assign topics, or choose activities in a fun way.</p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Restaurant & Food Choices</h4>
            <p className="text-sm">Can't decide where to eat or what to cook? Let the wheel decide between your options.</p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Games & Entertainment</h4>
            <p className="text-sm">Use for party games, selecting random challenges, or creating a game show atmosphere.</p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Chore Assignment</h4>
            <p className="text-sm">Fairly distribute household chores or tasks among family members or roommates.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Decision Wheel FAQ</h3>
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-medium text-primary">Is the decision wheel truly random?</h4>
            <p className="text-sm">Yes! Our wheel uses a cryptographically secure random algorithm to determine where it stops, ensuring completely fair results.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary">How many options can I add to the wheel?</h4>
            <p className="text-sm">You can add multiple options to the wheel. Each option will be represented by a colorful segment on the wheel.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary">Can I save my wheel configuration?</h4>
            <p className="text-sm">Currently, wheels cannot be saved between sessions. Consider taking a screenshot if you want to remember your specific configuration.</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-primary/10 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-2">Explore Our Other Random Tools</h3>
          <p className="mb-3">Need other ways to make random selections? Try our team generator, number picker, dice roller, or coin flipper!</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="text-sm text-primary hover:underline">Team Generator →</Link>
            <Link to="/name-picker" className="text-sm text-primary hover:underline">Number Generator →</Link>
            <Link to="/dice-roller" className="text-sm text-primary hover:underline">Dice Roller →</Link>
            <Link to="/coin-flip" className="text-sm text-primary hover:underline">Coin Flip →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionWheelPage;
