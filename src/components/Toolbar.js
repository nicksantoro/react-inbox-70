import React, { Component } from 'react'

export default class Toolbar extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">2</span>
              unread messages
            </p>

            <button onClick={this.props.toggleAll} className="btn btn-default">
              <i className="fa fa-square-o"></i>
            </button>

            <button className="btn btn-default" disabled="disabled">
              Mark As Read
            </button>

            <button onClick={this.props.toggleRead} className="btn btn-default" disabled={this.props.selectStatus()}>
              Mark As Unread
            </button>

            <select className="form-control label-select" disabled="disabled">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select" disabled="disabled">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default" disabled="disabled">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
        
      </div>
    )
  }
}
