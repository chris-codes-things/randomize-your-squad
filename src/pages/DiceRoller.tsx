
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DiceRoller from '../components/DiceRoller';
import { Users, User, Dice3, Coins, CircleDashed, GraduationCap, Gamepad2, Pencil, BarChartBig } from 'lucide-react';

const DiceRollerPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6">
      <Helmet>
        <title>Online Dice Roller - Free Virtual Dice Rolling Tool</title>
        <meta name="description" content="Free online dice roller tool. Roll virtual dice for board games, RPGs, or decision making. Roll up to 10 dice at once. Simple, free, and mobile-friendly." />
        <meta name="keywords" content="dice roller, virtual dice, online dice, random dice, dice simulator, board game dice, RPG dice roller, d6 dice, dice game, virtual game dice, dungeons and dragons dice" />
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

      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-10 shadow-sm">
          <h2 className="text-2xl font-bold text-primary mb-4">About Our Virtual Dice Roller</h2>
          <p className="mb-4">Our free online dice roller lets you roll virtual dice for board games, tabletop RPGs, or any situation where you need random numbers. With customizable dice count and realistic animations, it's the perfect substitute for physical dice.</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Why Use Our Virtual Dice?</h3>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>No physical dice required - perfect for when dice are lost or unavailable</li>
            <li>Roll multiple dice at once with instant results</li>
            <li>Fair and random outcomes for unbiased gameplay</li>
            <li>Works on all devices - mobile, tablet, or desktop</li>
            <li>Free to use with no ads interrupting your game</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Popular Dice Rolling Uses</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white/50 rounded-lg flex items-start gap-3 transition-all hover:bg-white/70">
              <Gamepad2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-medium text-primary">Board Games</h4>
                <p className="text-sm">Perfect for Monopoly, Yahtzee, Backgammon, or any game requiring dice rolls.</p>
              </div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg flex items-start gap-3 transition-all hover:bg-white/70">
              <Dice3 className="text-primary mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-medium text-primary">Role-Playing Games</h4>
                <p className="text-sm">Roll for initiative, damage, saving throws, and more in D&D and other RPGs.</p>
              </div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg flex items-start gap-3 transition-all hover:bg-white/70">
              <GraduationCap className="text-primary mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-medium text-primary">Educational Activities</h4>
                <p className="text-sm">Use for math games, probability lessons, or random student selection.</p>
              </div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg flex items-start gap-3 transition-all hover:bg-white/70">
              <Pencil className="text-primary mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-medium text-primary">Random Decision Making</h4>
                <p className="text-sm">Let the dice decide when you can't make up your mind between options.</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Dice Rolling FAQ</h3>
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-medium text-primary">Are the dice rolls truly random?</h4>
              <p className="text-sm">Yes! We use cryptographically secure random number generation to ensure fair and unpredictable results every time.</p>
            </div>
            <div>
              <h4 className="font-medium text-primary">Can I roll more than 6-sided dice?</h4>
              <p className="text-sm">Currently we offer standard 6-sided dice. We're working on adding other dice types like D4, D8, D10, D12, and D20 in future updates.</p>
            </div>
            <div>
              <h4 className="font-medium text-primary">Is there a limit to how many dice I can roll?</h4>
              <p className="text-sm">You can roll up to 10 dice simultaneously with our current tool.</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-primary/10 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-2">Explore Our Other Random Tools</h3>
            <p className="mb-3">Need other randomization tools? Try our team generator, number picker, coin flipper, or decision wheel!</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/" className="text-sm text-primary hover:underline">Team Generator →</Link>
              <Link to="/name-picker" className="text-sm text-primary hover:underline">Number Generator →</Link>
              <Link to="/coin-flip" className="text-sm text-primary hover:underline">Coin Flip →</Link>
              <Link to="/decision-wheel" className="text-sm text-primary hover:underline">Decision Wheel →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiceRollerPage;
