import React, { Component } from 'react'
import IndexHeader from '../IndexHeader';

export default class App extends Component {
  componentDidMount() {
    fetch("https://news-at.zhihu.com/api/4/news/latest")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
        }
      )
  }

  render() {
    return (
      <div>
        <IndexHeader title={"首页"}/>
      </div>
    )
  }
}
