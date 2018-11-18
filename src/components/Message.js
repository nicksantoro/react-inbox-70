import React, { Component } from 'react'

export default class Message extends Component {
  render() {

    let label = this.props.message.labels.map((label, idx) => 
      <span key={idx} className="label label-warning">{label}</span>
    )

    // console.log(this.props.message, "this is")
  
    return (
      <div>
        <div 
          className={`row message ${this.props.message.read ? "read" : "unread" } 
          ${this.props.message.selected ? "selected" : ""}`} 
        >
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input onClick={() => this.props.messageSelected(this.props.message.id)} type="checkbox" checked={this.props.message.selected} />
                {/* {`${this.props.message.selected ? "checked" : "" }`} */}
              </div>
              <div className="col-xs-2">
        
                <i 
                  onClick={() => this.props.toggleStar(this.props.message.id)}
                  className={`star fa fa-star${this.props.message.starred ? "" : "-o"}`}>
                </i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
          {label}
            {/* <a href="#"> */}
              {/* Here is some message text that has a bunch of stuff */}
              {this.props.message.subject}
            {/* </a> */}
          </div>
        </div>
      </div>
    )
  }
}
