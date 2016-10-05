import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

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

  genres = {
    rock: {
      title: 'Rock and Roll',
      people: [
        {
          img: 'src/images/woman-977020_640.jpg',
          title: 'Jenny',
          author: 'Punk Rock'
        },
        {
          img: 'src/images/woman-1476320_640.jpg',
          title: 'Caroline',
          author: 'Heavy Metal'
        },
        {
          img: 'src/images/musician-1209073_640.jpg',
          title: 'Victoria',
          author: 'Pop'
        },
        {
          img: 'src/images/woman-1535795_640.jpg',
          title: 'Lisa',
          author: 'Pop'
        }
      ]
    },
    pop: {
      title: 'Pop & Top 40',
      people: [
        {
          img: 'src/images/musician-1209073_640.jpg',
          title: 'Victoria',
          author: 'Pop'
        },
        {
          img: 'src/images/woman-1535795_640.jpg',
          title: 'Lisa',
          author: 'Pop'
        }
      ]
    },
    emo: {
      title: 'Emo & Crabcore',
      people: [
        {
          img: 'src/images/musician-664432_640.jpg',
          title: 'Brett',
          author: 'EDM'
        },
        {
          img: 'src/images/saxophone-1561556_640.jpg',
          title: 'Malory',
          author: 'Emo'
        }
      ]
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      genre: 'rock'
    }
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
            {Object.keys(this.genres).map((key) => {
              return <MenuItem value={key} primaryText={this.genres[key].title} key={key} />
            })}
          </SelectField>
        </div>
        <div style={this.styles.right}>
          <GridList
            cellHeight={320}
            padding={0}
            style={this.styles.gridList}
          >
            {this.genres[this.state.genre].people.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span><b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
          >
                <img src={tile.img} />
              </GridTile>
        ))}
          </GridList>
        </div>
      </div>
    )
  }
}

export default DatingSuggestions

// onTouchTap={this.profileSelect}
// profileSelect = () => {
// browserHistory.push('/UserProfile')
// }
