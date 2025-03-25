
import React from 'react';
import { Helmet } from 'react-helmet';
import TeamGenerator from '../components/TeamGenerator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6">
      <Helmet>
        <title>Team Randomizer - Easy Random Team & Group Generator Tool</title>
        <meta name="description" content="Free random team generator tool. Quickly create random groups from a list of names for school, work, or events. Simple, fast, and mobile-friendly." />
      </Helmet>
      <TeamGenerator />
    </div>
  );
};

export default Index;
