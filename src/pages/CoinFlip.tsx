
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
        <meta name="keywords" content="coin flip, coin toss, heads or tails, virtual coin, online coin flip, random coin, coin flipper, decision coin, flip a coin, random coin toss, heads and tails" />
        <link rel="canonical" href="https://teamrandomizer.com/coin-flip" />
        <meta property="og:title" content="Virtual Coin Flip - Free Online Coin Toss Tool" />
        <meta property="og:description" content="Flip a virtual coin for making quick decisions or settling disputes. Simple, free, and mobile-friendly coin flipper." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamrandomizer.com/coin-flip" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Virtual Coin Flip - Free Online Coin Toss Tool" />
        <meta name="twitter:description" content="Flip a virtual coin for making quick decisions." />
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

      <div className="w-full max-w-4xl mx-auto px-6 py-10 bg-white/80 backdrop-blur-sm rounded-xl mt-10 shadow-sm">
        <h2 className="text-2xl font-bold text-primary mb-4">About Our Virtual Coin Flip Tool</h2>
        <p className="mb-4">Our free coin flip simulator makes it easy to make quick binary decisions when you don't have a physical coin handy. With the ability to flip multiple coins at once and track statistics, it's more versatile than a real coin toss.</p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Features of Our Coin Flipper</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Flip one or multiple coins simultaneously</li>
          <li>Realistic coin flipping animation</li>
          <li>Heads/tails statistics tracked across multiple flips</li>
          <li>Truly random results for fair decision making</li>
          <li>Works on all devices without requiring installation</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">When to Use a Coin Flip</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Quick Decisions</h4>
            <p className="text-sm">Can't decide between two options? Let the coin decide to save time and avoid decision fatigue.</p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Sports & Games</h4>
            <p className="text-sm">Determine who goes first in games or sports matches with a fair coin toss.</p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Teaching Probability</h4>
            <p className="text-sm">Demonstrate probability concepts by flipping multiple coins and tracking the results.</p>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h4 className="font-medium text-primary">Breaking Ties</h4>
            <p className="text-sm">Use a neutral coin flip to resolve disputes or break tied votes fairly.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Coin Flipping FAQ</h3>
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-medium text-primary">Is the coin flip truly 50/50?</h4>
            <p className="text-sm">Yes! Unlike physical coins that can have slight biases, our virtual coin ensures a perfect 50/50 probability between heads and tails.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary">How many coins can I flip at once?</h4>
            <p className="text-sm">You can flip multiple coins simultaneously to see the distribution of heads and tails across several flips.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary">Can I use this for important decisions?</h4>
            <p className="text-sm">Our coin flipper is perfect for casual decisions. For truly consequential choices, we recommend more thorough decision-making methods.</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-primary/10 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-2">Check Out Our Other Random Tools</h3>
          <p className="mb-3">Looking for more ways to randomize? Try our team generator, number picker, dice roller, or decision wheel!</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="text-sm text-primary hover:underline">Team Generator →</Link>
            <Link to="/name-picker" className="text-sm text-primary hover:underline">Number Generator →</Link>
            <Link to="/dice-roller" className="text-sm text-primary hover:underline">Dice Roller →</Link>
            <Link to="/decision-wheel" className="text-sm text-primary hover:underline">Decision Wheel →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinFlipPage;
