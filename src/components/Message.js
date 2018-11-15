import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    console.log(this.props.message, "this is")
    return (
      <div>
        <div className="row message unread">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" />
              </div>
              <div className="col-xs-2">
        
                <i className={`star fa fa-star${this.props.message.starred ? "" : "-o"}`}></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            <a href="#">
              {/* Here is some message text that has a bunch of stuff */}
              {this.props.message.subject}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
