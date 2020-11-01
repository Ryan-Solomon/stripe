import React from 'react';
import { useAppContext } from './Context';

const Navbar = () => {
  const appContext = useAppContext();

  return (
    <nav>
      <div>
        <button onClick={appContext?.openSidebar}>Open Sidebar</button>
      </div>
      <ul>
        <li>
          <button>products1</button>
          <button>products2</button>
          <button>products3</button>
        </li>
      </ul>
      <button>Sign In</button>
    </nav>
  );
};
