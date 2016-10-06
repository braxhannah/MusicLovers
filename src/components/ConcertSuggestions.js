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
import { badReligion } from '../images'
import { beartooth } from '../images'
import { carrieUnderwood } from '../images'
import { kesha } from '../images'
import { pennywise } from '../images'
import { switchfoot } from '../images'
import { trivium } from '../images'

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
          <a href='http://www.ticketmaster.com/journeys-presents-the-made-to-destroy-st-petersburg-florida-10-09-2016/event/0D0050EFB2769A1C?artistid=1487015&majorcatid=10001&minorcatid=60&tm_link=artist_msg-0_0D0050EFB2769A1C&ab=reloaded'>
            <FlatButton label='Tickets' />
          </a>
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
          <a href='http://www.ticketmaster.com/sum-41s-dont-call-it-a-st-petersburg-florida-10-08-2016/event/0D005104F5B8BCAD?artistid=706142&majorcatid=10001&minorcatid=60&ab=reloaded'>
            <FlatButton label='Tickets' />
          </a>
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
          <a href='http://www.ticketmaster.com/needtobreathe-presents-tour-de-compadres-tampa-florida-10-12-2016/event/0D005076CD9C9178?artistid=1032338&majorcatid=10001&minorcatid=60&tm_link=artist_msg-0_0D005076CD9C9178'>
            <FlatButton label='Tickets' />
          </a>
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
          <a href='http://www.ticketmaster.com/dark-matter-st-petersburg-florida-12-09-2016/event/0D00513E9FDE9598?artistid=1560128&majorcatid=10001&minorcatid=201'>
            <FlatButton label='Tickets' />
          </a>
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
          <a href='http://www.ticketmaster.com/finish-ticket-st-petersburg-florida-10-15-2016/event/0D0050CFFAFFC424?artistid=1614473&majorcatid=10001&minorcatid=60'>
            <FlatButton label='Tickets' />
          </a>
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
          <a href='http://www.ticketmaster.com/the-summer-set-made-for-you-tampa-florida-10-11-2016/event/0D005112DBABA248?artistid=1485424&majorcatid=10001&minorcatid=60'>
            <FlatButton label='Tickets' />
          </a>
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Bad Religion and Against Me!'
        />
        <CardMedia>
          <img src={badReligion} />
        </CardMedia>
        <CardActions>
          <a href='http://www.ticketmaster.com/the-vox-populi-tour-2016-bad-st-petersburg-florida-10-12-2016/event/0D0050E78DF37396?artistid=734491&majorcatid=10001&minorcatid=60&tm_link=artist_msg-0_0D0050E78DF37396&ab=reloaded'>
            <FlatButton label='Tickets' />
          </a>
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Carrie Underwood'
        />
        <CardMedia>
          <img src={carrieUnderwood} />
        </CardMedia>
        <CardActions>
          <a href='http://www.ticketmaster.com/carrie-underwood-the-storyteller-tour-tampa-florida-11-16-2016/event/0D0050760915AC8E?artistid=1004122&majorcatid=10001&minorcatid=2&tm_link=artist_msg-0_0D0050760915AC8E&ab=reloaded'>
            <FlatButton label='Tickets' />
          </a>
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Trivium'
        />
        <CardMedia>
          <img src={trivium} />
        </CardMedia>
        <CardActions>
          <a href='http://www.ticketmaster.com/trivium-st-petersburg-florida-10-18-2016/event/0D0050EC86A3700E?artistid=962593&majorcatid=10001&minorcatid=1&ab=reloaded'>
            <FlatButton label='Tickets' />
          </a>
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Beartooth'
        />
        <CardMedia>
          <img src={beartooth} />
        </CardMedia>
        <CardActions>
          <a href='http://www.ticketmaster.com/the-noise-presents-beartooth-the-aggressive-st-petersburg-florida-10-21-2016/event/0D0050E8A56B84AB?artistid=1836474&majorcatid=10001&minorcatid=200&ab=reloaded'>
            <FlatButton label='Tickets' />
          </a>
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Kesha and The Creepies'
        />
        <CardMedia>
          <img src={kesha} />
        </CardMedia>
        <CardActions>
          <a href='http://www.ticketmaster.com/kesha-and-the-creepies-the-fck-tampa-florida-10-25-2016/event/0D00512FAB21995B?artistid=1413109&majorcatid=10001&minorcatid=1&ab=reloaded'>
            <FlatButton label='Tickets' />
          </a>
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Pennywise'
        />
        <CardMedia>
          <img src={pennywise} />
        </CardMedia>
        <CardActions>
          <a href='http://www.ticketmaster.com/siriusxms-faction-presents-pennywise-playing-tampa-florida-10-27-2016/event/0D0050CFE165BAE9?artistid=741706&majorcatid=10001&minorcatid=60&ab=reloaded'>
            <FlatButton label='Tickets' />
          </a>
        </CardActions>
      </Card>
      <Card>
        <CardHeader
          title='Switchfoot and Relient K'
        />
        <CardMedia>
          <img src={switchfoot} />
        </CardMedia>
        <CardActions>
          <a href='http://www.ticketmaster.com/switchfoot-relient-k-looking-st-petersburg-florida-11-04-2016/event/0D0050ACF777B4A8?artistid=790118&majorcatid=10001&minorcatid=1&ab=reloaded'>
            <FlatButton label='Tickets' />
          </a>
        </CardActions>
      </Card>
    </div>
  }
}

export default ConcertSuggestions
