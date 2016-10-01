import React, { Component } from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

class LoginPage extends Component {

  styles = {
    Divider: {
      marginLeft: 20
    }
  }

  render () {
    return (
      <Paper zDepth={2}>
        <TextField hintText='Username' style={this.styles.Divider} underlineShow={false} />
        <Divider />
        <TextField hintText='Password' style={this.styles.Divider} underlineShow={false} />
        <Divider />
        <Divider />
      </Paper>
    )
  }
}

export default LoginPage
