import React, { Component } from 'react'
import '../styles/mainpage.sass'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { PierceTheVeil } from '../images'
import { sum41 } from '../images'
import { needToBreathe } from '../images'
import { darkMatter } from '../images'
import { finishTicket } from '../images'
import { theSummerSet } from '../images'



class ConcertSuggestions extends Component {

  render () {
    return <div>
      <Card>
        <CardHeader
          title='Pierce The Veil'
        />
        <CardMedia>
          <img src={PierceTheVeil} />
        </CardMedia>
        <CardActions>
          <FlatButton label='Tickets' />
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Sum 41'
        />
        <CardMedia>
          <img src={sum41} />
        </CardMedia>
        <CardActions>
          <FlatButton label='Tickets' />
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Need to Breathe'
        />
        <CardMedia>
          <img src={needToBreathe} />
        </CardMedia>
        <CardActions>
          <FlatButton label='Tickets' />
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Dark Matter'
        />
        <CardMedia>
          <img src={darkMatter} />
        </CardMedia>
        <CardActions>
          <FlatButton label='Tickets' />
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Finish Ticket'
        />
        <CardMedia>
          <img src={finishTicket} />
        </CardMedia>
        <CardActions>
          <FlatButton label='Tickets' />
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='The Summer Set'
        />
        <CardMedia>
          <img src={theSummerSet} />
        </CardMedia>
        <CardActions>
          <FlatButton label='Tickets' />
        </CardActions>
      </Card>
    </div>
  }
}

export default ConcertSuggestions
