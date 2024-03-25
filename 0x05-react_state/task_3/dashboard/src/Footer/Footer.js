import React from 'react';
import { AppContext } from '../App/AppContext';

const Footer = () => (
  <AppContext.Consumer>
    {({ user }) => (
      <footer className="footer">
        {user.isLoggedIn && (
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
      </footer>
    )}
  </AppContext.Consumer>
);

export default Footer;
