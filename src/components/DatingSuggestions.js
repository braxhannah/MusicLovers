import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

import genres from '../data'

class DatingSuggestions extends Component {

  styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'stretch',
      alignItems: 'stretch'
    },
    gridList: {
      width: '100%'
    },
    left: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.5em 0',
      backgroundColor: 'white'
    },
    right: {
      display: 'flex',
      justifyContent: 'stretch',
      alignItems: 'stretch'
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      genre: 'rock'
    }
  }

  static propTypes = {
    sendDate: React.PropTypes.func
  }

  selectGenre = (event, index, value) => {
    this.setState({ genre: value })
  }

  render () {
    return (
      <div style={this.styles.root}>
        <div style={this.styles.left}>
          <SelectField
            autoWidth
            value={this.state.genre}
            onChange={this.selectGenre}
          >
            {Object.keys(genres).map((key) => {
              return <MenuItem value={key} primaryText={genres[key].title} key={key} />
            })}
          </SelectField>
        </div>
        <div style={this.styles.right}>
          <GridList
            cellHeight={320}
            padding={0}
            style={this.styles.gridList}
          >
            {genres[this.state.genre].people.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span><b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
          >
                <img onTouchTap={() => { browserHistory.push('/UserProfile/' + tile.id) }} src={tile.img} />
              </GridTile>
        ))}
          </GridList>
        </div>
      </div>
    )
  }
}

export default DatingSuggestions
