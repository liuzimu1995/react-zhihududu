import React, { Component } from 'react'
import './style.css';

export default class IndexHeader extends Component {
  render() {
    return (
      <div className="index-header">
        <div className="title" > {this.props.title} </div>
      </div>
    )
  }
}
