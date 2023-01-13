import React from 'react';

import MainNav from './main-nav';
import AuthNav from './auth-nav';

const NavBar = () => {
  return (
    <div className="#">
      <nav className="#">
        <div className="#">
          <div className="#" />
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;