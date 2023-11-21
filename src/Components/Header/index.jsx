import "./header.css";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineClose,
  AiOutlineDown,
  AiFillCaretDown,
  AiFillCaretRight,
} from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [ham, setHam] = useState(false);
  const [serDropdown, setSerDropdown] = useState(false);
  const [isServicesDropdownVisible, setServicesDropdownVisible] =
    useState(false);

  const handleServicesMouseEnter = () => {
    setServicesDropdownVisible(true);
  };
  const handleServicesMouseLeave = () => {
    setServicesDropdownVisible(false);
  };
  return (
    <div>
      <nav className='header'>
        <Link to='/' className='logo'>
          <img src={Logo} alt='logo' />
        </Link>
        <span onClick={() => setHam(!ham)} className='switch-ham'>
          <i>{ham ? <AiOutlineClose /> : <GiHamburgerMenu />}</i>
        </span>
        <div className={`${ham && "hamburger-links"} closed`}>
          <NavLink to='/'>
            <div>HOME</div>
          </NavLink>
          <div className='ham-inner'>
            <NavLink to='/services'>SERVICES</NavLink>
            <button
              className='drop-button'
              onClick={() => setSerDropdown(!serDropdown)}
            >
              {serDropdown ? <AiFillCaretRight /> : <AiFillCaretDown />}
            </button>
          </div>
          {serDropdown && (
            <div className='inner-menu'>
              <ul>
                <li>
                  <NavLink to='/services/residential'>Residential</NavLink>
                </li>
                <li>
                  <NavLink to='/services/commercial'>Commercial</NavLink>
                </li>
                <li>
                  <NavLink to='/services/hospitality'>Hospitality</NavLink>
                </li>
                <li>
                  <NavLink to='/services/interiors'>Interiors</NavLink>
                </li>
                <li>
                  <NavLink to='/services/multi-Residential'>
                    Multi-Residential
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          <div className='ham-inner'>
            <NavLink to='/projects'>
              <div>PROJECTS</div>
            </NavLink>
          </div>
          <NavLink to='/contact'>
            <div>CONTACT</div>
          </NavLink>
        </div>
        <div className='nav-links'>
          <NavLink to='/'>HOME</NavLink>
          <NavLink
            to='/services'
            className='dropdown-container'
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <div className='trigger-element'>
              SERVICES
              <i>
                <AiOutlineDown />
              </i>
            </div>
            {isServicesDropdownVisible && (
              <div className='dropdown-menu'>
                <ul>
                  <li>
                    <NavLink to='/services/residential'>Residential</NavLink>
                  </li>
                  <li>
                    <NavLink to='/services/commercial'>Commercial</NavLink>
                  </li>
                  <li>
                    <NavLink to='/services/hospitality'>Hospitality</NavLink>
                  </li>
                  <li>
                    <NavLink to='/services/interiors'>Interiors</NavLink>
                  </li>
                  <li>
                    <NavLink to='/services/multi-Residential'>
                      Multi-Residential
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </NavLink>
          <NavLink to='/projects' className='dropdown-container'>
            PROJECTS
          </NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
