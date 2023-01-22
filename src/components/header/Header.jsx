import React from 'react';
import LOGO from './../../assets/svg/YT_logo.svg';
import MENU from './../../assets/svg/menu-icon.svg';
import SEARCH from './../../assets/svg/search.svg';
import MICRO from './../../assets/svg/micro.svg';
import BULLETS from './../../assets/svg/bullets.svg';
import USER from './../../assets/svg/user.svg';

import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="navigation">
        <div className="menu-ic">
          <img src={MENU} alt="icon menu" />
        </div>
        <div className="YT-ic">
          <img src={LOGO} alt="logo Youtube" />
        </div>
      </div>
      <div className="search">
        <label htmlFor="search-bar">
          <input type="text" id="search-bar" placeholder="Search" />
        </label>
        <button className="search-ic">
          <img src={SEARCH} alt="logo loupe" />
        </button>
        <div className="micro-ic">
          <img src={MICRO} alt="logo microphone" />
        </div>
      </div>
      <div className="more-user">
        <div className="bullets-ic">
          <img src={BULLETS} alt="trois points" />
        </div>
        <div className="sign-in">
          <div className="user-ic">
            <img src={USER} alt="logo utiliateur" />
          </div>
          <p>Sign in</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
