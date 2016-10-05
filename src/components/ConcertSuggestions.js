import React, { Component } from 'react'
import '../styles/mainpage.sass'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import { peopleParty } from '../images'

class ConcertSuggestions extends Component {

  render () {
    return <div>
      <Card>
        <CardHeader
          title='Concert Name'
        />
        <CardMedia
          overlay={<CardTitle
            title='Dude its a title'
            subtitle='Dude its a subtitle' />}
        >
          <img src={peopleParty} />
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
      <Card>
        <CardHeader
          title='Concert TWO'
        />
        <CardMedia
          overlay={<CardTitle
            title='Dude its a title'
            subtitle='Dude its a subtitle' />}
        >
          <img src={peopleParty} />
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
    </div>
  }
}

export default ConcertSuggestions
