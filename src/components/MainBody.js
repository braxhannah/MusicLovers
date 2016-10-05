import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { RaisedButton } from 'material-ui'
import spacing from 'material-ui/styles/spacing'
import { headphones } from '../images'

class MainBody extends Component {

  constructor () {
    super()
    this.state = {
      currentBody: []
    }
  }

  signIn = () => {
    browserHistory.push('/LoginPage')
  }

  signUp = () => {
    browserHistory.push('/SignUp')
  }

  styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1',
      backgroundImage: 'url(' + headphones + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden'
    },
    button: {
      margin: spacing.desktopGutterMini
    }
  }

  render () {
    return (
      <div style={this.styles.main}>
        <RaisedButton label='Login' onTouchTap={this.signIn} primary style={this.styles.button} />
        <RaisedButton label='Sign Up' onTouchTap={this.signUp} secondary style={this.styles.button} />
      </div>
    )
  }
}

export default MainBody
