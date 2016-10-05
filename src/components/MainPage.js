import React, { Component } from 'react'
import '../styles/mainpage.sass'
import { browserHistory } from 'react-router'
import spacing from 'material-ui/styles/spacing'
import { Tabs, Tab } from 'material-ui/Tabs'
import DatingSuggestions from './DatingSuggestions'
import ConcertSuggestions from './ConcertSuggestions'
import { headphones } from '../images'

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
      backgroundImage: 'url(' + headphones + ')',
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
      <div style={this.styles.backgroundPicture}>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label='Concerts' value='concert' style={{height: '100%'}} >
            <ConcertSuggestions />
          </Tab>
          <Tab label='Dating' value='dating' style={{height: '100%'}} >
            <DatingSuggestions sendDate={this.props.sendDate} currentDate={this.props.currentDate} />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default MainPage
