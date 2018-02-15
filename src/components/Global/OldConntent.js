//Dependences
import React, { Component } from 'react';

//Assets
import './css/Content.css';


// ---------------------------------
//  IGNORE THIS FILE
// ---------------------------------
class Content extends Component {
  constructor() {
    super(); //con super tendremos acceso a "this"
    this.state = { //*nota: caada vez que se actualice el state, se ejecutara el render
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    };
    //con bind se optiene todo el objeto this de la clase
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
  }

  componentDidMount() { //comprobar que el cmponente cargo y actualizar el state inicial
    this.setState({
      count: 1
    })
  }

  handleCountClick(e) {//todos los metodos para click, llevan prefijo "handle"
    console.log(e);
    if(e.target.id === 'add') {
      this.setState({
        count: this.state.count + 1
      });
    }else if (e.target.id === 'substract' && this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }else if (e.target.id === 'reset') {
      this.setState({
        count: 0
      });
    }
  }

  handleInputChanged(e){
    if(e.target.id === 'number1'){
      this.setState({
        number1: Number(e.target.value)
      });
    }else if (e.target.id === 'number2'){
      this.setState({
        number2: Number(e.target.value)
      });
    }
  }

  handleResultClick(e){
    this.setState({
      result: this.state.number1 + this.state.number2
    });
  }

  render() {
    console.log("Ejecuta Render");
    return (
      <div className="Content"> 
        <h2>Counter: {this.state.count}</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="substract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>

        <hr/>
        <h2>Calculator</h2>
        <p>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged} />
          +
          <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged} />
          <button id="result" onClick={this.handleResultClick}>=</button> {this.state.result}
        </p>
      </div>
    );
  }
}

export default Content; 