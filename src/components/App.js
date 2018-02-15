//Dependencies
import React, { Component } from 'react';
import PropTypes from "prop-types";

//Components
import Header from "./Global/Header";
import Content from "./Global/Content";
import Footer from "./Global/Footer";

//Data
import items from "../data/menu";

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    //Se utiliza props para enviar contenido a componentes:
    //Se envia title y items  a Header y copyrigth a Footer
    const { children } = this.props;

    return (
      <div className="App">
        <Header title="Sport's Shop" items={items}/> 
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;
