import {
  woman1, woman2, woman3, woman4, woman5, woman7, woman9,
  musician1, musician2, musician3, saxophone,
  guy1, guy3, guy7, guy8, guy10
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
      },
      {
        id: 7,
        img: guy3,
        title: 'Pharrell',
        author: 'Pop',
        about: 'I love the pop scene',
        bands: 'Celo Green , Beyonce',
        instruments: 'Microphone'
      },
      {
        id: 8,
        img: woman7,
        title: 'Candice',
        author: 'Hip Hop',
        about: 'I enjoy jamming out to Rock on the weekends',
        bands: 'Run dmc, Grand Master Flash',
        instruments: 'None'
      }
    ]
  },
  emo: {
    title: 'Emo & Crabcore',
    people: [
      {
        id: 9,
        img: musician3,
        title: 'Brett',
        author: 'Emo',
        about: 'Mosh Pits for life',
        bands: 'Safety Suit, Taking Back Sunday',
        instruments: 'Les Paul Guitar'
      },
      {
        id: 10,
        img: saxophone,
        title: 'Malory',
        author: 'Crabcore',
        about: 'Enjoys Head banging to songs',
        bands: 'Metalica',
        instruments: 'Electric Guitar'
      },
      {
        id: 11,
        img: woman9,
        title: 'Ana',
        author: 'Crabcore',
        about: 'Moshpits for life',
        bands: 'Anberlin, Sparks The Rescue',
        instruments: 'Electric Guitar'
      },
      {
        id: 12,
        img: guy7,
        title: 'Mace',
        author: 'Scremo',
        about: 'Slapping the Bass on Stage',
        bands: 'My Chemical Romance, A.D.T.R.',
        instruments: 'Bass Guitar'
      }
    ]
  },
  folk: {
    title: 'Folk & Core',
    people: [
      {
        id: 12,
        img: guy7,
        title: 'Mace',
        author: 'Scremo',
        about: 'Slapping the Bass on Stage',
        bands: 'My Chemical Romance, A.D.T.R.',
        instruments: 'Bass Guitar'
      }
    ]
  },
  EDM: {
    title: 'Aggrotech & CrustPunk',
    people: [
      {
        id: 13,
        img: woman5,
        title: 'Judice',
        author: 'Electo',
        about: 'Chilling at the bar',
        bands: 'Tritonal, Yogi',
        instruments: 'Synthesizer'
      },
      {
        id: 14,
        img: guy10,
        title: 'Duke',
        author: 'Dubstep',
        about: 'Techno has my soul',
        bands: 'Daft Punk, Skrillex',
        instruments: 'Turntables'
      },
      {
        id: 15,
        img: guy1,
        title: 'Blain',
        author: 'Crunk',
        about: 'Turning the bass up!',
        bands: 'Cobra Starship, Travis Barker',
        instruments: 'Turntables'
      },
      {
        id: 16,
        img: guy8,
        title: 'Giana',
        author: 'Dubstep',
        about: 'Drumming to the beat',
        bands: 'Deadmau5',
        instruments: 'Drums'
      }
    ]
  }
}
