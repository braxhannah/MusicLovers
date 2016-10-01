import React, { Component } from 'react'
import '../styles/mainpage.sass'
import { browserHistory } from 'react-router'
import { RaisedButton } from 'material-ui'
import spacing from 'material-ui/styles/spacing'
import { Tabs, Tab } from 'material-ui/Tabs'
import DatingSuggestions from './DatingSuggestions'
import ConcertSuggestions from './ConcertSuggestions'

let imgUrl = 'src/images/concerts-1150042_1280.jpg'

class MainPage extends Component {

  styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1',
      width: '100vw'
    },
    backgroundPicture: {
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundSize: 'cover',
      overflow: 'hidden'
    },
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400
    },
    button: {
      margin: spacing.desktopGutterMini
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
      <Tabs value={this.state.value} styles={this.styles.backgroundPicture} onChange={this.handleChange}>
        <Tab label='Concert Suggestions' value='concert' >
          <ConcertSuggestions />
        </Tab>
        <Tab label='Dating Suggestions' value='dating' >
          <DatingSuggestions />
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
