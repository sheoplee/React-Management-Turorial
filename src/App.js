import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

  }

  render () {
    return (
      <div className="gray-background">
        <img src={logo} lat="logo" />
        <h2>Let's develop management system!!!</h2>
      </div>
    );
  }
}

export default App;
