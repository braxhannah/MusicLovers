import {
  woman1, woman2, woman3, woman4,
  musician1, musician2, musician3, saxophone
} from './images'

export default {
  rock: {
    title: 'Rock and Roll',
    people: [
      {
        id: 1,
        img: woman1,
        title: 'Jenny',
        author: 'Punk Rock',
        about: 'Chilling at the bar',
        bands: 'Green Day and Dropkick Murphys',
        instruments: 'Hollow Body Guitar'
      },
      {
        id: 2,
        img: woman2,
        title: 'Caroline',
        author: 'Punk',
        about: 'Folk punk for life',
        bands: 'Judah and The Lion, Johnny Hobo',
        instruments: 'Banjo'
      },
      {
        id: 3,
        img: musician1,
        title: 'Victoria',
        author: 'Rock',
        about: 'Swinging and Rocking',
        bands: 'All That Remains, All American Rejects',
        instruments: 'Fender Strat'
      },
      {
        id: 4,
        img: woman3,
        title: 'Lisa',
        author: 'Rock',
        about: 'I enjoy jamming out to Rock on the weekends',
        bands: 'Safety Suit, Taking Back Sunday',
        instruments: 'Violin'
      }
    ]
  },
  pop: {
    title: 'Pop & Top 40',
    people: [
      {
        id: 5,
        img: musician2,
        title: 'Victoria',
        author: 'Pop',
        about: 'I enjoy jamming out to Rock on the weekends',
        bands: 'Major Lazer, Shawn Mendes',
        instruments: 'None'
      },
      {
        id: 6,
        img: woman4,
        title: 'Lisa',
        author: 'Top 40',
        about: 'I enjoy jamming out to Rock on the weekends',
        bands: 'Justin Timberlake, The Chainsmokers',
        instruments: 'Piano'
      }
    ]
  },
  emo: {
    title: 'Emo & Crabcore',
    people: [
      {
        id: 7,
        img: musician3,
        title: 'Brett',
        author: 'Emo',
        about: 'Mosh Pits for life',
        bands: 'Safety Suit, Taking Back Sunday',
        instruments: 'Les Paul Guitar'
      },
      {
        id: 8,
        img: saxophone,
        title: 'Malory',
        author: 'Crabcore',
        about: 'Enjoys Head banging to songs',
        bands: 'Metalica',
        instruments: 'Electric Guitar'
      }
    ]
  }
}
