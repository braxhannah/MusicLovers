import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { RaisedButton } from 'material-ui'
import spacing from 'material-ui/styles/spacing'

let imgUrl = 'src/images/flute-1427652_1920.jpg'

class MainBody extends Component {

  constructor () {
    super()
    this.state = {
      currentBody: []
    }
  }

  signIn = () => {
    browserHistory.push('/MainPage')
  }

  signUp = () => {
    browserHistory.push('/UserInput')
  }

  styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1',
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundSize: 'cover',
      overflow: 'hidden'
    },
    button: {
      margin: spacing.desktopGutterMini
    }
  }

  render () {
    return (
      <div style={this.styles.main}>
        <RaisedButton label='Sign In' onTouchTap={this.signIn} primary style={this.styles.button} />
        <RaisedButton label='Sign Up' onTouchTap={this.signUp} secondary style={this.styles.button} />
      </div>
    )
  }
}

export default MainBody
