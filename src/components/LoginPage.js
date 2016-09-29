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
        <TextField hintText='First name' style={this.styles.Divider} underlineShow={false} />
        <Divider />
        <TextField hintText='Last name' style={this.styles.Divider} underlineShow={false} />
        <Divider />
        <TextField hintText='Email address' style={this.styles.Divider} underlineShow={false} />
        <Divider />
        <TextField hintText='Email address' style={this.styles.Divider} underlineShow={false} />
        <Divider />
      </Paper>
    )
  }
}

export default LoginPage
