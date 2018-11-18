// map
// if i want the number of elements to stay the same, use map
// you want to do something to every element, or some elements

// filter
// filter elements out, end up with smaller number of elements in array as it was before
// when you no longer want some items in array, want some items gone

import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar';

const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]
class App extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    // let messges = awit fetch ('url')
    this.setState({
      messages
    })
  }

  selectStatus = () => {
    let { messages } = this.state;
    //return messages.filter(message => message.selected).length === 0 ? "disabled" : '';

    let disabledStatus = "";
    const selectedCount = messages.filter(message => message.selected).length;
    if(selectedCount === 0) {
      disabledStatus = "square" 
    } else if (selectedCount===messages.length) {
      disabledStatus = "check-square";
    } else {
      disabledStatus = "minus-square";
    }
    return disabledStatus
  }

  markRead = read => e => {
    // read===true - mark selected messages as read
    // read===false - mark selected messages as unread
    const { messages } = this.state;
    const updatedMessages = messages.map(message => {
      if(message.selected){
        return {...message, read: read }
      }
      return message;
    })
    this.setState({ messages: updatedMessages })
  }

  deleteMessage = () => {
    const { messages } = this.state;
    const updatedMessages = messages.filter(message => !message.selected)
    this.setState({ messages: updatedMessages })
  }

  applyLabel = e => {
    console.log('[applyLabel]', e.target.value)
    const { messages } = this.state;
    const label = e.target.value;
    const updatedMessages = messages.map(message => {
      if(message.selected && !message.labels.includes(label)) {
        return {...message, labels: [...message.labels, label] }
      }
      return message
    })
    this.setState({ messages: updatedMessages })
  }

  removeLabel = e => {
    const { messages } = this.state;
    const label = e.target.value;
    const updatedMessages = messages.map(message => {
      if(message.selected && message.labels.includes(label)) {
        const labels = message.labels.filter(l => l !== label );
        return {...message, labels}
      }
      return message;
    })
    this.setState({ messages: updatedMessages })
  }

  toggleAll = () => {
    let { messages } = this.state;
    const checked = messages.filter(message => !message.selected);
    const selected = (checked.length <= 0) ? false : true;
    const updatedMessages = messages.map(message => ({ ...message, selected }) )
    this.setState({ messages: updatedMessages })
  }

  messageSelected = (id) => {
    let {messages} = this.state
    console.log(id, "message selected method");

    const updatedMessages = messages.map(message => {
      if(message.id === id) {
        return { ...message, selected: !message.selected }
      }
      return message;
    })
    this.setState({ messages: updatedMessages })
  }

  toggleStar = (id) => {
    let {messages} = this.state
    const updatedMessages = messages.map(message => {
      if(message.id === id) {
        return { ...message, starred:!message.starred }
      }
      return message;
    })
    this.setState({messages: updatedMessages})
  }
  
  render() {
    console.log(this.state.messages)
    return (
      <div className="App">
        <Toolbar 
          toggleAll={this.toggleAll}
          markUnRead={this.markUnRead}
          markRead={this.markRead}
          selectStatus={this.selectStatus}
          toggleRead={this.toggleRead}
          deleteMessage={this.deleteMessage}
          messages={this.state.messages}
          applyLabel={this.applyLabel}
          removeLabel={this.removeLabel}
        />
        <MessageList  
          messages={this.state.messages}
          toggleStar={this.toggleStar}
          messageSelected={this.messageSelected}
          selectStatus={this.selectStatus}
        />
      </div>
    );
  }
}

export default App;
