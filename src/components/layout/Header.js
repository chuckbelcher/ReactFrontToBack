import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import { smart } from '@babel/template';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
// Header.defaultProps = {
//     branding: 'My App'
// }

export default Header;