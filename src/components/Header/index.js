import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        trigger={
          <button
            type="button"
            testid="hamburgerIconButton"
            className="hamburger-button"
          >
            <GiHamburgerMenu className="hamburger-menu" />
          </button>
        }
        modal
      >
        {close => (
          <>
            <div className="pop-up">
              <button
                type="button"
                className="button"
                onClick={() => close()}
                testid="closeButton"
              >
                <IoMdClose className="close-icon" />
              </button>
              <ul className="list-container">
                <li>
                  <Link
                    to="/"
                    className="home-container"
                    onClick={() => close()}
                  >
                    <AiFillHome className="home-icon" />
                    <p className="home-menu">Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="home-container"
                    onClick={() => close()}
                  >
                    <BsInfoCircleFill className="home-icon" />
                    <p className="home-menu">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
