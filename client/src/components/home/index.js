import React, { Component, Fragment } from 'react'

import TopContent from './topcontent'
import Progress from './progress'
import Category from './category'
import Overlay from './../utility/overlay'

class Home extends Component {
  constructor() {
    super()
  }

  injectJavascripts() {
    const script = document.createElement('script')
    script.src = '/js/main.js'
    script.async = true
    document.body.appendChild(script)
  }

  componentDidMount() {
    this.injectJavascripts()
  }

  render() {
    return (
      <Fragment>
        <TopContent />
        <Progress />
        <Category />
        <Overlay />
      </Fragment>
    )
  }
}

export default Home
