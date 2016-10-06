import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { RaisedButton } from 'material-ui'
import spacing from 'material-ui/styles/spacing'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { headphones } from '../images'

class SignUp extends Component {

  Submit = () => {
    browserHistory.push('/main/music')
  }

  styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1',
      backgroundImage: 'url(' + headphones + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
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
          <TextField hintText='Spotify UserID' style={this.styles.Divider} underlineShow={false} />
          <Divider />
          <TextField hintText='Spotify Password' style={this.styles.Divider} underlineShow={false} />
          <Divider />
          <TextField hintText='Email Address' style={this.styles.Divider} underlineShow={false} />
        </Paper>
        <RaisedButton label='Submit' onTouchTap={this.Submit} primary style={this.styles.button} />
      </div>
    )
  }
}

export default SignUp

// <div style={this.styles.main}>
// <RaisedButton label='Sign In' onTouchTap={this.signIn} primary style={this.styles.button} />
// </div>
