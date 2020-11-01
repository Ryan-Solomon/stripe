import React from 'react';

import { useAppContext } from './Context';

const Hero = () => {
  const appContext = useAppContext();

  return <h2>Hero Component</h2>;
};

export default Hero;
