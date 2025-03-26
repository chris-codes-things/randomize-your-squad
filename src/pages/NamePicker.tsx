import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import RandomNumberGenerator from '../components/RandomNumberGenerator';
import { Users, User, Dice3, Coins, CircleDashed, Ticket, BarChartBig, Pencil, Shuffle } from 'lucide-react';

const RandomNumberPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6">
      <Helmet>
        <title>Random Number Generator - Free Online Random Number Tool</title>
        <meta name="description" content="Free random number generator tool. Generate random numbers within a custom range with options for unique numbers. Simple, free, and mobile-friendly." />
        <meta name="keywords" content="random number generator, random integer generator, number picker, lottery number generator, unique random numbers, random number tool, lucky number picker, random number set, number randomizer, integer range picker" />
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

      <div className="w-full max-w-4xl mx-auto px-6 py-10 bg-white/80 backdrop-blur-sm rounded-xl mt-10 shadow-sm">
        <h2 className="text-2xl font-bold text-primary mb-4">About Our Random Number Generator</h2>
        <p className="mb-4">Our free random number generator allows you to quickly create random numbers within any range you specify. Whether you're choosing lottery numbers, selecting random samples, or just need a random number for any purpose, our tool makes it simple.</p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Features of Our Number Generator</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Generate numbers within any minimum and maximum range</li>
          <li>Choose how many random numbers you want to generate</li>
          <li>Option to prevent duplicate numbers in your results</li>
          <li>Instant generation with no delay</li>
          <li>No sign-up or download required</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Common Uses for Random Numbers</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-white/50 rounded-lg flex items-start gap-3 transition-all hover:bg-white/70">
            <Ticket className="text-primary mt-0.5 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-medium text-primary">Lottery & Games</h4>
              <p className="text-sm">Generate random lottery numbers, raffle selections, or game inputs without bias.</p>
            </div>
          </div>
          <div className="p-4 bg-white/50 rounded-lg flex items-start gap-3 transition-all hover:bg-white/70">
            <BarChartBig className="text-primary mt-0.5 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-medium text-primary">Statistics & Sampling</h4>
              <p className="text-sm">Create random samples for surveys, research, or statistical analysis.</p>
            </div>
          </div>
          <div className="p-4 bg-white/50 rounded-lg flex items-start gap-3 transition-all hover:bg-white/70">
            <Pencil className="text-primary mt-0.5 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-medium text-primary">Education</h4>
              <p className="text-sm">Randomly select students for activities, assign random problems, or create math exercises.</p>
            </div>
          </div>
          <div className="p-4 bg-white/50 rounded-lg flex items-start gap-3 transition-all hover:bg-white/70">
            <Shuffle className="text-primary mt-0.5 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-medium text-primary">Decision Making</h4>
              <p className="text-sm">Use random numbers to make unbiased selections or choices between options.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Frequently Asked Questions</h3>
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-medium text-primary">How random are the numbers generated?</h4>
            <p className="text-sm">Our generator uses cryptographically secure random algorithms to ensure truly unpredictable and unbiased results.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary">What's the maximum range I can use?</h4>
            <p className="text-sm">You can generate numbers within any reasonable numerical range, from tiny to very large numbers.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary">Can I generate decimal numbers?</h4>
            <p className="text-sm">Currently, our tool generates whole integers. For decimal generation, stay tuned for future updates.</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-primary/10 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-2">Try Our Other Random Tools</h3>
          <p className="mb-3">Need other randomization tools? Check out our team generator, dice roller, coin flipper, and decision wheel!</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="text-sm text-primary hover:underline">Team Generator →</Link>
            <Link to="/dice-roller" className="text-sm text-primary hover:underline">Dice Roller →</Link>
            <Link to="/coin-flip" className="text-sm text-primary hover:underline">Coin Flip →</Link>
            <Link to="/decision-wheel" className="text-sm text-primary hover:underline">Decision Wheel →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomNumberPage;
