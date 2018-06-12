import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.hendelClick = this.hendelClick.bind(this);
    this.state = {
      counter: 0
    }
  }
  hendelClick(){
    this.setState({counter: ++this.state.counter})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button handler={this.hendelClick} />
        <Text counter={this.state.counter} />
      </div>
    );
  }
}
class Button extends Component {
  render(){
    return (
        <button onClick={this.props.handler} className='btn btn-solid'>Click me</button>
    )
  }
}
class Text extends Component {
  render(){
    return <div className="App-intro">Alredy clicked <span className="color-blue">{this.props.counter}</span> times</div>;
  }
}

export default App;
