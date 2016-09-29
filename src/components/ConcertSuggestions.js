import React, { Component } from 'react'
import '../styles/mainpage.sass'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class ConcertSuggestions extends Component {

  render () {
    return (
      <Card>
          <CardHeader /*see if I can not have a header and put info in cardMedia/*
          title='Concert Name'
        />
        <CardMedia
          overlay={<CardTitle
            title='Overlay title'
            subtitle='Overlay subtitle' />}
        >
          <img src='images/nature-600-337.jpg' />
        </CardMedia>
        <CardTitle title='Card title' subtitle='Card subtitle' />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label='Action1' />
          <FlatButton label='Action2' />
        </CardActions>
      </Card>
    )
  }
}

export default ConcertSuggestions
