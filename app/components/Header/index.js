import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Login from './Login';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/contacts">
          <FormattedMessage {...messages.contacts} />
        </HeaderLink>
        <Login>Login</Login>
      </NavBar>
    </div>
  );
}

export default Header;
