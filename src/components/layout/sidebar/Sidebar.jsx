import React from 'react';
import { Link } from 'react-router-dom';
import MENU from './../../../assets/svg/menu-icon.svg';
import HOME from './../../../assets/svg/home.svg';
import SHORT from './../../../assets/svg/short.svg';
import TVPLAY from './../../../assets/svg/tv-play.svg';
import TVSQUARE from './../../../assets/svg/tv-square.svg';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link className="navLink">
            <div className="menu-ic">
              <img src={MENU} alt="icon menu" />
            </div>
          </Link>
        </li>
        <li className="sectionNav">
          <Link className="navLink">
            <div className="home-ic">
              <img src={HOME} alt="icon maison" />
            </div>
            <span>Home</span>
          </Link>
        </li>
        <li className="sectionNav">
          <Link className="navLink">
            <div className="short-ic">
              <img src={SHORT} alt="icon short" />
            </div>
            <span>Shorts</span>
          </Link>
        </li>
        <li className="sectionNav">
          <Link className="navLink">
            <div className="tvplay-ic">
              <img src={TVPLAY} alt="icon ecran lecture" />
            </div>
            <span>Subscriptions</span>
          </Link>
        </li>
        <li className="sectionNav">
          <Link className="navLink">
            <div className="tvsquare-ic">
              <img src={TVSQUARE} alt="icon ecran lecture" />
            </div>
            <span>Library</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
