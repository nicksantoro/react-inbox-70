import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList />
      </div>
    );
  }
}

export default App;
