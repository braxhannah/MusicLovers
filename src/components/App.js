import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, Drawer, MenuItem } from 'material-ui'
import MainFooter from './MainFooter'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { browserHistory } from 'react-router'

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
    browserHistory.push('/MainPage')
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
            titleStyle={{ textAlign: 'center' }}
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
            <MenuItem onTouchTap={this.handleMenulogout}>Logout</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App

// <MenuItem onTouchTap={this.handleMenu}>Home</MenuItem>
// <MenuItem onTouchTap={this.handleMenu}>Selections</MenuItem>
