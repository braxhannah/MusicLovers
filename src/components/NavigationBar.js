import React, { Component } from 'react'
import { AppBar } from 'material-ui'

class NavigationBar extends Component {

  render () {
    return <AppBar
      title='Music Lovers'
      titleStyle={{ textAlign: 'center' }}
    />
  }
}

export default NavigationBar
