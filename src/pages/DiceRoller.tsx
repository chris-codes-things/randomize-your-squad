
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DiceRoller from '../components/DiceRoller';
import { Users, User, Dice3, Coins, CircleDashed } from 'lucide-react';

const DiceRollerPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6">
      <Helmet>
        <title>Online Dice Roller - Free Virtual Dice Rolling Tool</title>
        <meta name="description" content="Free online dice roller tool. Roll virtual dice for board games, RPGs, or decision making. Roll up to 10 dice at once. Simple, free, and mobile-friendly." />
        <meta name="keywords" content="dice roller, virtual dice, online dice, random dice, dice simulator, board game dice, RPG dice roller, d6 dice" />
        <link rel="canonical" href="https://teamrandomizer.com/dice-roller" />
        <meta property="og:title" content="Online Dice Roller - Free Virtual Dice Rolling Tool" />
        <meta property="og:description" content="Roll virtual dice for board games, RPGs, or decision making. Roll up to 10 dice at once. Simple, free, and mobile-friendly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamrandomizer.com/dice-roller" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Dice Roller - Free Virtual Dice Rolling Tool" />
        <meta name="twitter:description" content="Roll virtual dice for board games, RPGs, or decision making." />
      </Helmet>
      
      <div className="w-full max-w-6xl mx-auto px-4 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Virtual Dice Roller</h1>
          <p className="text-muted-foreground mt-2">Roll virtual dice for games, decisions, or random numbers</p>
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
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
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
      
      <DiceRoller />
    </div>
  );
};

export default DiceRollerPage;
