import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, Drawer, MenuItem } from 'material-ui'
import MainFooter from './MainFooter'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

class App extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  constructor () {
    super()
    this.state = {
      drawerOpen: false
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

  handleMenu = (event) => {
    this.closeDrawer()
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className='app' style={this.styles.app}>
          <AppBar
            title='Music Lovers'
            titleStyle={{ textAlign: 'center' }}
            onLeftIconButtonTouchTap={this.openDrawer}
          />
          <main style={this.styles.main}>
            {this.props.children}
          </main>
          <MainFooter />
          <Drawer
            open={this.state.drawerOpen}
            onRequestChange={this.changeDrawer}
            docked={false}
          >
            <MenuItem onTouchTap={this.handleMenu}>Home</MenuItem>
            <MenuItem onTouchTap={this.handleMenu}>Selections</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
