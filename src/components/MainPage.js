import React, { Component } from 'react'
import '../styles/mainpage.sass'
import { browserHistory } from 'react-router'
import { RaisedButton } from 'material-ui'
import spacing from 'material-ui/styles/spacing'
import { Tabs, Tab } from 'material-ui/Tabs'
import DatingSuggestions from './DatingSuggestions'
import ConcertSuggestions from './ConcertSuggestions'

class MainPage extends Component {

  styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1'
    },
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400
    },
    button: {
      margin: spacing.desktopGutterMini
      // background: url('images/pexels-photo.jpg');
    },
    test: {
      backgroundColor: '#18FFFF'
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      value: {}
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  };

  render () {
    return (
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab label='Concert Suggestions' value='concert'>
          Dating Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Tab>
        <Tab label='Dating Suggestions' value='dating'>
          Concert Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Tab>
      </Tabs>
    )
  }
}

export default MainPage

// <div style={this.styles.main}>
//   <RaisedButton label='Concert Suggestions' onTouchTap={this.concertLoad} backgroundColor='green' style={this.styles.button} />
//   <RaisedButton label='Dating Suggestions' onTouchTap={this.datingLoad} backgroundColor='purple' style={this.styles.button} />
// </div>

  // background-image: url('../images/pexels-photo.jpg')
  // background-image: image('../images/pexels-photo.jpg')

// <div className='userChoices'>
//   <div className='choicesContainer'>
//     <Link to='/DatingSuggestions'>
//       <button className='datingButton'>
//         Dating
//       </button>
//     </Link>
//     <Link to='/ConcertSuggestions'>
//       <button className='concertButton'>
//         Concerts
//       </button>
//     </Link>
//   </div>
// </div>
