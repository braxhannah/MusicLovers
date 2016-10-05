import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import { RaisedButton } from 'material-ui'
import Snackbar from 'material-ui/Snackbar'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'

class UserProfile extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleTouchTap = () => {
    this.setState({
      open: true
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'stretch',
      alignItems: 'stretch'
    },
    leftTopHalf: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.5em 0',
      backgroundColor: 'white'
    },
    rightTopHalf: {
      display: 'flex',
      justifyContent: 'stretch',
      alignItems: 'stretch'
    }
  }

  render () {
    return (
      <div>
        <div className='topHalf'>
          <div style={this.styles.left}>
            <Paper zDepth={2}>
              <img src='src/images/woman-977020_640.jpg' />
            </Paper>
          </div>
          <div style={this.styles.right}>
            <p />
          </div>
          <Paper zDepth={2}>
            <h3> About Me </h3>
            <TextField defaultValue='' style={this.styles.Divider} underlineShow={false} />
            <Divider />
            <h3> Favorite Bands </h3>
            <TextField defaultValue='Favorite Bands' style={this.styles.Divider} underlineShow={false} />
            <Divider />
            <h3> Favorite Instrument </h3>
            <TextField defaultValue='Favorite Instrument' style={this.styles.Divider} underlineShow={false} />
          </Paper>
          <div className='bottomHalf'>
            <SelectField value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText='Never' />
              <MenuItem value={2} primaryText='Every Night' />
            </SelectField>
            <div>
              <RaisedButton
                onTouchTap={this.handleTouchTap}
                label='Invite'
              />
              <Snackbar
                open={this.state.open}
                message='Invite Accepted!'
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
              />
            </div>
          </div>
        </div>
      </div>
      )
  }
  }
export default UserProfile
