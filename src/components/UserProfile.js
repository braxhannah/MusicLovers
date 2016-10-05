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
    left: {
      display: 'flex'
    },
    right: {
      display: 'flex'
    },
    divider: {
      marginLeft: '10px'
    }
  }

  render () {
    console.log('UserProps', this.props)
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <div className='topHalf' style={{display: 'flex', width: '100%'}}>
          <div style={this.styles.left}>
            <Paper zDepth={2}>
              <img src={this.props.currentDate.img} />
            </Paper>
          </div>
          <div style={this.styles.right}>
            <p />
          </div>
          <Paper zDepth={2} style={{width: '100%'}}>
            <h3 style={{marginLeft: '10px'}}> About Me </h3>
            <TextField defaultValue={this.props.currentDate.about} style={this.styles.divider} underlineShow={false} />
            <Divider />
            <h3 style={{marginLeft: '10px'}}> Favorite Bands </h3>
            <TextField defaultValue={this.props.currentDate.bands} style={this.styles.divider} underlineShow={false} />
            <Divider />
            <h3 style={{marginLeft: '10px'}}> Favorite Instrument </h3>
            <TextField defaultValue={this.props.currentDate.instruments} style={this.styles.divider} underlineShow={false} />
          </Paper>
        </div>
        <div className='bottomHalf'>
          <SelectField value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText='Pierce The Veil' />
            <MenuItem value={2} primaryText='Sum 41' />
            <MenuItem value={2} primaryText='Need to Breathe' />
            <MenuItem value={2} primaryText='Dark Matter' />
            <MenuItem value={2} primaryText='Finish Ticket' />
            <MenuItem value={2} primaryText='The Summer Set' />

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
      )
  }
  }
export default UserProfile
