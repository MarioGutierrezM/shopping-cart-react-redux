//Dependencies
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    //console.log(this.props);
    const { title } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <span className="navbar-brand" >
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          {title}
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav Menu">
            <li className="nav-item li-custom"> <Link to={'/'}><i className="fas fa-home"></i> Home </Link>  </li>
            <li className="nav-item li-custom"> <Link to={'/products'}><i className="fas fa-tags"></i> Products </Link>  </li>
            <li className="nav-item li-custom"> <Link to={'/orders'}><i className="fas fa-tasks"></i> Orders </Link> </li>
            <li className="nav-item li-custom"> <Link to={'/admin'}><i className="fas fa-edit"></i> Admin </Link> </li>
            <li className="nav-item li-custom"> <Link to={'/shoppingcart'}><i className="fas fa-shopping-cart"></i> Shopping Cart </Link> </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
