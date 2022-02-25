import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import bars from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import "./TopBar.css";
import { useState } from "react";

export const TopBar = () => {
  const [mediaOpen, setMediaOpen] = useState(false);
  const navigation = useLocation();
  const location = navigation.pathname.split("/")[1];

  return (
    <>
      <div className='top'>
        <div className='logo-container'>
          <img className='logo' src={logo} alt='' />
        </div>
        <div className='line'></div>
        <nav className='navbor'>
          <ul>
            <li
              style={{
                borderBottom: location === "" ? "3px solid white" : undefined,
              }}
            >
              <Link className='Link' to='/'>
                <span className='nav-num'>00</span> HOME{" "}
              </Link>
            </li>

            <li
              style={{
                borderBottom:
                  location === "destination" ? "3px solid white" : undefined,
              }}
            >
              <Link className='Link' to='/destination'>
                <span className='nav-num'>01</span> DESTINATION
              </Link>
            </li>

            <li
              style={{
                borderBottom:
                  location === "crew" ? "3px solid white" : undefined,
              }}
            >
              <Link className='Link' to='/crew'>
                <span className='nav-num'>02</span> CREW
              </Link>
            </li>

            <li
              style={{
                borderBottom:
                  location === "technology" ? "3px solid white" : undefined,
              }}
            >
              <Link className='Link' to='/technology'>
                <span className='nav-num'>03</span> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </nav>
        <div className='bars-containe'>
          <img
            onClick={() => setMediaOpen(!mediaOpen)}
            src={mediaOpen ? close : bars}
            alt=''
          />
        </div>
      </div>
      <nav
        style={{ display: mediaOpen ? "block" : undefined }}
        className='media_navbar'
      >
        <ul>
          <li
            style={{
              borderBottom: location === "" ? "3px solid white" : undefined,
            }}
          >
            {" "}
            <Link className='Link' to='/'>
              <span className='nav-num'>00</span> HOME{" "}
            </Link>
          </li>

          <li
            style={{
              borderBottom:
                location === "destination" ? "3px solid white" : undefined,
            }}
          >
            <Link className='Link' to='/destination'>
              <span className='nav-num'>01</span> DESTINATION
            </Link>{" "}
          </li>

          <li
            style={{
              borderBottom: location === "crew" ? "3px solid white" : undefined,
            }}
          >
            <Link className='Link' to='/crew'>
              <span className='nav-num'>02</span> CREW
            </Link>{" "}
          </li>

          <li
            style={{
              borderBottom:
                location === "technology" ? "3px solid white" : undefined,
            }}
          >
            <Link className='Link' to='/technology'>
              <span className='nav-num'>03</span> TECHNOLOGY
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};
