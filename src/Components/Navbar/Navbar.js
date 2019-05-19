import React, { useState } from "react";
import { Search, Home, PlusCircle, Heart, User, Menu, X } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-logo-wrapper container">
        <div className="navbar-logo">
          <h3>Classified</h3>
        </div>
        <div
          onClick={() => {
            activeMenu ? setActiveMenu(false) : setActiveMenu(true);
          }}
          className="nav-hamburger"
        >
          <Menu />
        </div>
        <div className="search-logo" />
        <Search />
      </div>
      <div className={`navbar-item-wrapper ${activeMenu ? "active-menu" : ""}`}>
        <div
          className="navbar-item-close container"
          onClick={() => {
            activeMenu ? setActiveMenu(false) : setActiveMenu(true);
          }}
        >
          <X />
        </div>
        <ul className="navbar-items">
          <Link
            onClick={() => {
              activeMenu ? setActiveMenu(false) : setActiveMenu(true);
            }}
            className="navbar-item"
            to="/"
          >
            <li>
              <Home className="navbar-item-logo" /> Home Page
            </li>
          </Link>
          <Link
            onClick={() => {
              activeMenu ? setActiveMenu(false) : setActiveMenu(true);
            }}
            className="navbar-item"
            to="/search"
          >
            <li>
              <Search className="navbar-item-logo" /> Search Listing
            </li>
          </Link>
          <Link
            onClick={() => {
              activeMenu ? setActiveMenu(false) : setActiveMenu(true);
            }}
            className="navbar-item"
            to="/saved-listings"
          >
            <li>
              <Heart className="navbar-item-logo" /> Saved Listing
            </li>
          </Link>
          <Link
            onClick={() => {
              activeMenu ? setActiveMenu(false) : setActiveMenu(true);
            }}
            className="navbar-item"
            to="/create"
          >
            <li>
              <PlusCircle className="navbar-item-logo" /> Create Listings
            </li>
          </Link>
          <Link
            onClick={() => {
              activeMenu ? setActiveMenu(false) : setActiveMenu(true);
            }}
            className="navbar-item"
            to="/user"
          >
            <li>
              <User className="navbar-item-logo" /> My Profile
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
