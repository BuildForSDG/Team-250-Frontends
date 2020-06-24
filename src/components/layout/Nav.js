/* eslint-disable prefer-template */
/* eslint-disable quotes */
/* eslint-disable no-negated-condition */
/* eslint-disable multiline-ternary */
/* eslint-disable sort-imports */

import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { initials } from './Helper';
import ShoppingCart from './ShoppingCart';
import { logout } from '../../actions/auth';
import SearchForm from './SearchForm';

const loggedOut = (
  <div className="logout">
    <Link to="/login">
      <button className="login-btn">Login</button>
    </Link>
    <Link to="/signup/customer">
      <button className="login-btn reg-second">Signup</button>
    </Link>
  </div>
);

const LoggedIn = (props) => (
  <div className="login">
    {props.isFarmer ? (
      <Link to={'/dashboard'}>
        <span>
          {initials(
            !props.users.first_name ? props.users.business_name : props.users.first_name + ' ' + props.users.last_name
          )}
        </span>
      </Link>
    ) : (
      <Link to={'/order/user'}>
        <span>{initials(props.users.email)}</span>
      </Link>
    )}
    <button className="login-btn" onClick={props.handleClick}>
      Logout
    </button>
  </div>
);

const NavListItem = (props) => (
  <li className="nav-item nav-link">
    <NavLink to={props.to} activeStyle={{ color: '#00ad45', fontWeight: 'bolder' }}>
      {props.name}
    </NavLink>
  </li>
);

const NavList = () => (
  <ul className="navbar-nav mr-auto">
    <NavListItem to={'/home'} name="Home" />
    <NavListItem to={'/about'} name="About Us" />
    <NavListItem to={'/contactus'} name="Contact Us" />
  </ul>
);

const Nav = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isFarmer = useSelector((state) => state.auth.isFarmer);
  const user = useSelector((state) => state.auth.user);
  const handleClick = () => dispatch(logout());
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src="https://res.cloudinary.com/kayode/image/upload/v1591256550/farm_icon_myu6pc.svg"
          alt="Icon"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {'  '}Zerohunger
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavList />
        <SearchForm />
        <NavLink to="/cart">
          <ShoppingCart />
        </NavLink>
        {isAuthenticated ? <LoggedIn
          users={user} isFarmer={isFarmer} handleClick={handleClick} /> : loggedOut}
      </div>
    </div>
  );
};

export default Nav;
