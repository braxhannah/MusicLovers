import React, { Component } from 'react'
import '../styles/mainpage.sass'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class ConcertSuggestions extends Component {

  render () {
    return (
      <Card>
        <CardHeader
          title='Concert Name'
        />
        <CardMedia
          overlay={<CardTitle
            title='Dude its a title'
            subtitle='Dude its a subtitle' />}
        >
          <img src='src/images/people-party-dancing-music.jpg' />
        </CardMedia>
        <CardTitle title='Card title' subtitle='Card subtitle' />
        <CardText>
          Maybe Music times
        </CardText>
        <CardActions>
          <FlatButton label='Tickets' />
          <FlatButton label='Test' />
        </CardActions>
      </Card>
    )
  }
}

export default ConcertSuggestions
