import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

class DatingSuggestions extends Component {

  styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100vw'
    },
    gridList: {
      width: 500,
      height: 500,
      overflowY: 'auto',
      marginBottom: 24
    }
  }
  tilesData = [
    {
      img: 'src/images/musician-1209073_640.jpg',
      title: 'Victoria',
      author: 'Pop'
    },
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
      img: 'src/images/woman-1535795_640.jpg',
      title: 'Lisa',
      author: 'Pop'
    },
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

  render () {
    return (
      <div style={this.styles.root}>
        <GridList
          cellHeight={200}
          style={this.styles.gridList}
        >
          <Subheader>December</Subheader>
          {this.tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
        >
              <img src={tile.img} />
            </GridTile>
      ))}
        </GridList>
      </div>
    )
  }
}

export default DatingSuggestions
