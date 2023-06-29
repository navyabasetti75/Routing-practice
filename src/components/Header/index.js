// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave"
      />
      <h1 className="title">Wave</h1>
      <ul className="nav-items-list">
        <li className="list-item">
          <Link className="route-link" to="/">
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link className="route-link" to="/about">
            About
          </Link>
        </li>
        <li className="list-item">
          <Link className="route-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
