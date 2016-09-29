import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

class DatingSuggestions extends Component {

styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24
  }
}

const tilesData = [
  {
    img: 'images/dj-1541429_1920.jpg',
    title: 'Breakfast',
    author: 'jill111'
  },
  {
    img: 'images/dj-1541429_1920.jpg',
    title: 'Tasty burger',
    author: 'pashminu'
  },
  {
    img: 'images/dj-1541429_1920.jpg',
    title: 'Camera',
    author: 'Danson67'
  },
  {
    img: 'images/dj-1541429_1920.jpg',
    title: 'Morning',
    author: 'fancycrave1'
  },
  {
    img: 'images/dj-1541429_1920.jpg',
    title: 'Hats',
    author: 'Hans'
  },
  {
    img: 'images/dj-1541429_1920.jpg',
    title: 'Honey',
    author: 'fancycravel'
  },
  {
    img: 'images/dj-1541429_1920.jpg',
    title: 'Vegetables',
    author: 'jill111'
  },
  {
    img: 'images/dj-1541429_1920.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki'
  }
]

render () {
  return (
    
const GridListExampleSimple = () => (
  <div style={this.styles.root}>
    <GridList
      cellHeight={200}
      style={this.styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
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
    )
  }
}

export default DatingSuggestions
