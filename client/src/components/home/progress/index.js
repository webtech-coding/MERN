import React, { Component } from 'react'

export default class Progress extends Component {
  render() {
    return (
      <div className="progress">
        <div className="progress__title">
          Complete the Levels and Earn Dollars
        </div>
        <div className="progress__bar"></div>
        <p className="progress__value">$0</p>
        <div className="progress__link">
          <div className="progress__link-left">
            <span
              className="progress__link-text"
              video-data="https://www.youtube.com/embed/UDtlvZGmHYk"
            >
              How to earn Dollars
            </span>
          </div>
          <div className="progress__link-right">
            <span
              className="progress__link-text"
              video-data="https://www.youtube.com/embed/W86cTIoMv2U"
            >
              About Coaching Service
            </span>
          </div>
        </div>
      </div>
    )
  }
}
