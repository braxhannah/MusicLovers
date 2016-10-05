import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Router, Route, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './styles/screen.sass'

injectTapEventPlugin()

import {
  MainBody,
  MainPage,
  UserProfile,
  LoginPage,
  SignUp
} from './components'

const root = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={MainBody} />
      <Route path='/UserProfile/:id' component={UserProfile} />
      <Route path='/main/:tab' component={MainPage} />
      <Route path='/LoginPage' component={LoginPage} />
      <Route path='/SignUp' component={SignUp} />
    </Route>
  </Router>
)

render(root, document.getElementById('root'))
