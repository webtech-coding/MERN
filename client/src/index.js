import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'

import Routes from './routes'
import MasterLayout from './components/hoc/masterLayout'

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk,
  promiseMiddleware
)(createStore)

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      //TODO : IMPORT COMBINED REDUX HERE
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <MasterLayout>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MasterLayout>
  </Provider>,

  document.getElementById('root')
)
