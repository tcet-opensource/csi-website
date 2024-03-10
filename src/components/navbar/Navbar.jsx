import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const redirectToBulletin = (event) => {
    event.preventDefault();
    window.location.href = 'https://online.pubhtml5.com/qesub/gwua/';    
    // window.open('https://online.pubhtml5.com/qesub/gwua/', '_blank');    // for opening in new tab
  };

  const redirectToNimbus = (event) => {
    event.preventDefault();
    window.location.href = 'https://online.pubhtml5.com/qesub/ufmd/';    
    // window.open('https://online.pubhtml5.com/qesub/ufmd/', '_blank');    // for opening in new tab
  };

  const redirectToNewsLetter = (event) => {
    event.preventDefault();
    window.location.href = 'https://online.pubhtml5.com/qesub/ufwi/';    
    // window.open('https://online.pubhtml5.com/qesub/ufwi/', '_blank');    // for opening in new tab
  };
  

  return (
    <nav >
      <Link to="/" className="logo">
        <img src="/csi-logo.jpeg" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">HOME</NavLink>
        </li>
        <li>
          <NavLink to="">
            <div className="dropdown rounded-md ">
              TEAMS
              <div className="dropdown-content rounded-md">
                <NavLink  to="/teams" className="a">Core</NavLink>
                <NavLink to="/wc" className="a">Working Committee</NavLink>
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <div className="dropdown rounded-md">
              EVENTS
              <div className="dropdown-content rounded-md">
                <NavLink to="/events" className="a">2023-24</NavLink>
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <div className="dropdown rounded-md">
              MAGAZINE
              <div className="dropdown-content rounded-md">
                <span className="a" onClick={redirectToBulletin}>Bulletin</span>                
                <span className="a" onClick={redirectToNimbus}>Nimbus</span>
                <span className="a" onClick={redirectToNewsLetter}>NewsLetter</span>
              </div>        
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/sponsors">SPONSORS</NavLink>
        </li>
      </ul>
    </nav>
  );
};
