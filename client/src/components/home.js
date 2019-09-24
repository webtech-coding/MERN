import React, { Fragment } from 'react'

const Home = () => {
  const absoluteCenter = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: '30px'
  }
  return (
    <Fragment>
      <h2 style={absoluteCenter}>Norded Application home page :)</h2>
    </Fragment>
  )
}

export default Home
