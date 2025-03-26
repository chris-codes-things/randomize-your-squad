
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
        <meta name="keywords" content="decision wheel, random picker, spin wheel, wheel of names, random choice maker, random decision, choice spinner, decision maker" />
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
    </div>
  );
};

export default DecisionWheelPage;
