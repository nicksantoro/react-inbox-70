import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
  render() {
    const messagesL = this.props.messages.map((message, idx) =>
    
      <Message 
        key={idx}
        message={message}
        toggleStar={this.props.toggleStar}
        messageSelected={this.props.messageSelected}
      />
      
    )
    return (
      <div>
        {messagesL}
      </div>
    )
  }
}

export default MessageList
