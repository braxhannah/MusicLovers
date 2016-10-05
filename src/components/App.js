import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, Drawer, MenuItem } from 'material-ui'
import MainFooter from './MainFooter'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { browserHistory } from 'react-router'

import { logo } from '../images'

class App extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  constructor () {
    super()
    this.state = {
      drawerOpen: false,
      currentDate: {}
    }
  }

  styles = {
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    main: {
      flex: '1',
      display: 'flex',
      width: '100%'
    },
    title: {
      backgroundImage: `url(${logo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100px',
      backgroundPosition: 'center',
      color: 'transparent'
    }
  }

  openDrawer = () => {
    this.changeDrawer(true)
  }

  closeDrawer = () => {
    this.changeDrawer(false)
  }

  changeDrawer = (newState) => {
    this.setState({
      drawerOpen: newState
    })
  }

  handleMenuHome = (event) => {
    browserHistory.push('/main/music')
    this.closeDrawer()
  }

  handleMenuLovers = (event) => {
    browserHistory.push('/main/lovers')
    this.closeDrawer()
  }

  handleMenuMusic = (event) => {
    browserHistory.push('/main/music')
    this.closeDrawer()
  }

  handleMenulogout = () => {
    browserHistory.push('/')
    this.closeDrawer()
  }

  sendDate = (date) => {
    this.setState({currentDate: date})
  }

  render () {
    console.log('I am props', this.props.children)
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className='app' style={this.styles.app}>
          <AppBar
            title='Music Lovers'
            titleStyle={this.styles.title}
            onLeftIconButtonTouchTap={this.openDrawer}
          />
          <main style={this.styles.main}>
            {this.props.children && React.cloneElement(this.props.children, {sendDate: this.sendDate, currentDate: this.state.currentDate})}
          </main>
          <MainFooter />
          <Drawer
            open={this.state.drawerOpen}
            onRequestChange={this.changeDrawer}
            docked={false}
          >
            <MenuItem onTouchTap={this.handleMenuHome}>Home</MenuItem>
            <MenuItem onTouchTap={this.handleMenuMusic}>Music</MenuItem>
            <MenuItem onTouchTap={this.handleMenuLovers}>Lovers</MenuItem>
            <MenuItem onTouchTap={this.handleMenulogout}>Logout</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
