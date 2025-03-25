
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CoinFlipper from '../components/CoinFlipper';
import { Users, User, Dice3, Coins, CircleDashed } from 'lucide-react';

const CoinFlipPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6">
      <Helmet>
        <title>Virtual Coin Flip - Free Online Coin Toss Tool</title>
        <meta name="description" content="Free virtual coin flip tool. Flip a virtual coin for making quick decisions or settling disputes. Simple, free, and mobile-friendly." />
      </Helmet>
      
      <div className="w-full max-w-6xl mx-auto px-4 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Virtual Coin Flip</h1>
          <p className="text-muted-foreground mt-2">Flip virtual coins for quick decisions</p>
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
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
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
      
      <CoinFlipper />
    </div>
  );
};

export default CoinFlipPage;
