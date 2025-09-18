import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1H5L8 3H13V5H3.7457L2.03141 11H4.11144L5.2543 7H16L14 14H0V1Z"
            fill="#ff6300"
          />
        </svg>
        PortFolio
      </div>
      <nav>
        <ul>
          {/* <Link><li>Home</li></Link>
            <Link><li>Projects</li></Link>
            <Link><li>Contacts</li></Link> */}

            <li><Link to={'/Contacts'}>Contacts</Link></li>
            <li><Link to={'/Projects'}>Projects</Link></li>
            <li><Link to={'/About'}>Abouts</Link></li>
            <li><Link to={'/'}>Home</Link></li>


          {/* <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li> */}
        </ul>
      </nav>
      <div className="resume">
        <button className="btn">Download Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
