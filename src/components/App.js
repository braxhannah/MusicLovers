import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, Drawer, MenuItem } from 'material-ui'
import MainFooter from './MainFooter'

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
      display: 'flex'
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
      <MuiThemeProvider>
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
            <MenuItem onTouchTap={this.handleMenu}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleMenu}>Menu Item2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
