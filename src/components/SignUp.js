import React, { Component } from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

class SignUp extends Component {

  styles = {
    Divider: {
      marginLeft: 20
    }
  }

  render () {
    return (
      <Paper zDepth={2}>
        <TextField hintText='Spotify UserID' style={this.styles.Divider} underlineShow={false} />
        <Divider />
        <TextField hintText='Spotify password' style={this.styles.Divider} underlineShow={false} />
        <Divider />
        <TextField hintText='email address' style={this.styles.Divider} underlineShow={false} />
      </Paper>
    )
  }
}

export default SignUp
