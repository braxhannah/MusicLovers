import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { RaisedButton } from 'material-ui'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { headphones } from '../images'
import spacing from 'material-ui/styles/spacing'

class LoginPage extends Component {

  Submit = () => {
    browserHistory.push('/MainPage')
  }

  styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1',
      backgroundImage: 'url(' + headphones + ')',
      backgroundSize: 'cover',
      overflow: 'hidden'
    },
    Divider: {
      marginLeft: 20
    },
    button: {
      margin: spacing.desktopGutterMini
    }
  }

  render () {
    return (
      <div style={this.styles.main}>
        <Paper zDepth={2}>
          <TextField hintText='Username' style={this.styles.Divider} underlineShow={false} />
          <Divider />
          <TextField hintText='Password' style={this.styles.Divider} underlineShow={false} />
        </Paper>
        <RaisedButton label='Submit' onTouchTap={this.Submit} primary style={this.styles.button} />
      </div>
    )
  }
}

export default LoginPage
