import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import { RaisedButton } from 'material-ui'
import Snackbar from 'material-ui/Snackbar'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'

import data from '../data.js'

class UserProfile extends Component {

  constructor (props) {
    super(props)
    console.log(data, props.params.id)
    const person = Object.values(data).reduce((p, g) => p.concat(g.people), []).find(p => String(p.id) === props.params.id)
    this.state = {
      open: false,
      invited: false,
      inviteTo: null,
      message: '',
      currentDate: person
    }
  }

  handleTouchTap = () => {
    const accept = `${this.state.currentDate.title} accepted your invite to ${this.state.inviteTo}.`
    const decline = `${this.state.currentDate.title} turned down your invite to ${this.state.inviteTo}.`
    this.setState({ invited: true })
    setTimeout(() => {
      this.setState({
        open: true,
        invited: false,
        message: (Math.random() >= 0.5) ? accept : decline
      })
    }, 3000)
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  get styles () {
    return {
      main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        width: '100%'
      },
      profile: {
        display: 'flex',
        flex: '1',
        flexWrap: 'wrap',
        justifyContent: 'stretch',
        alignItems: 'stretch'
      },
      left: {
        backgroundImage: `url(${this.state.currentDate.img})`,
        backgroundSize: 'cover',
        flex: '1',
        minWidth: '200px',
        minHeight: '300px'
      },
      right: {
        flex: '1'
      },
      invites: {
        padding: '1.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
      },
      divider: {
        paddingLeft: '10px',
        fontWeight: 'normal'
      }
    }
  }

  handleChange = (event, index, value) => {
    this.setState({ inviteTo: value })
  }

  render () {
    console.log('UserProps', this.props)
    if (this.state.currentDate) {
      return <div style={this.styles.main}>
        <div style={this.styles.profile}>
          <div style={this.styles.left}>
          </div>
          <div style={this.styles.right}>
            <h3 style={{marginLeft: '10px'}}> About Me</h3>
            <h4 children={this.state.currentDate.about} style={this.styles.divider} />
            <Divider />
            <h3 style={{marginLeft: '10px'}}> Favorite Bands</h3>
            <h4 children={this.state.currentDate.bands} style={this.styles.divider} />
            <Divider />
            <h3 style={{marginLeft: '10px'}}> Favorite Instrument</h3>
            <h4 children={this.state.currentDate.instruments} style={this.styles.divider} />
          </div>
        </div>
        <div style={this.styles.invites}>
          <SelectField
            floatingLabelText={`Invite ${this.state.currentDate.title} to a concert...`}
            value={this.state.inviteTo}
            onChange={this.handleChange}
            disabled={this.state.invited}
          >
            <MenuItem value='Pierce The Veil' primaryText='Pierce The Veil' />
            <MenuItem value='Sum 41' primaryText='Sum 41' />
            <MenuItem value='Need to Breathe' primaryText='Need to Breathe' />
            <MenuItem value='Dark Matter' primaryText='Dark Matter' />
            <MenuItem value='Finish Ticket' primaryText='Finish Ticket' />
            <MenuItem value='The Summer Set' primaryText='The Summer Set' />
          </SelectField>
          <div style={{marginLeft: '1.5em'}}>
            <RaisedButton
              disabled={this.state.invited}
              onTouchTap={this.handleTouchTap}
              label='Invite'
              />
            <Snackbar
              open={this.state.open}
              message={this.state.message}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
              />
          </div>
        </div>
      </div>
    } else {
      return <h2>Profile Not Found</h2>
    }
  }
}

export default UserProfile
