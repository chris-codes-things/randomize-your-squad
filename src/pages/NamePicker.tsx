
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import RandomNumberGenerator from '../components/RandomNumberGenerator';
import { Users, User, Dice3, Coins, CircleDashed } from 'lucide-react';

const RandomNumberPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6">
      <Helmet>
        <title>Random Number Generator - Free Online Random Number Tool</title>
        <meta name="description" content="Free random number generator tool. Generate random numbers within a custom range with options for unique numbers. Simple, free, and mobile-friendly." />
        <meta name="keywords" content="random number generator, random integer generator, number picker, lottery number generator, unique random numbers, random number tool" />
        <link rel="canonical" href="https://teamrandomizer.com/name-picker" />
        <meta property="og:title" content="Random Number Generator - Free Online Random Number Tool" />
        <meta property="og:description" content="Generate random numbers within a custom range with options for unique numbers. Simple, free, and mobile-friendly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamrandomizer.com/name-picker" />
      </Helmet>
      
      <div className="w-full max-w-6xl mx-auto px-4 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Random Number Generator</h1>
          <p className="text-muted-foreground mt-2">Generate random numbers within your specified range</p>
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
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
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
            className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg text-foreground"
          >
            <CircleDashed size={18} />
            <span>Decision Wheel</span>
          </Link>
        </nav>
      </div>
      
      <RandomNumberGenerator />
    </div>
  );
};

export default RandomNumberPage;
