//Dependencies
import React, { Component } from 'react';
//import PropTypes from "prop-types";

//Assets
import './css/Footer.css';

class Footer extends Component {
  //Validar que un string venga en copyrigth
  // static propTypes = {
  //   copyrigth: PropTypes.string.isRequired
  // };

  render() {
    //si no encuentra algun valor en props, tomara el string por defecto
    //recibe la informacion que es mandada desde APP en props
    //const { copyrigth = '&copy; iTexico 2018' } = this.props;
    return (
      <div className="Footer">
          <h5> &copy; iTexico 2018   <i className="fab fa-facebook-square"></i> <i className="fab fa-twitter-square"></i> <i className="fab fa-linkedin"></i> </h5>
      </div>
    );
  }
}

export default Footer; 