import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
  render() {
    const messagesL = this.props.messages.map((message, idx) =>
      <div>
        <Message 
          message={message}
        />
      </div> 
    )
    return (
      <div>
        {messagesL}
      </div>
    )
  }
}

export default MessageList
