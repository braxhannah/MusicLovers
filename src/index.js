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
  UserInput,
  ConcertSuggestions,
  DatingSuggestions
} from './components'

const root = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={MainBody} />
      <Route path='/UserInput' component={UserInput} />
      <Route path='/ConcertSuggestions' component={ConcertSuggestions} />
      <Route path='/DatingSuggestions' component={DatingSuggestions} />
      <Route path='/MainPage' component={MainPage} />
    </Route>
  </Router>
)

render(root, document.getElementById('root'))
