import React, { Component } from 'react'
import {Link} from 'react-router'
import '../styles/userinput.sass'

class UserInput extends Component {
  render () {
    return (
      <div className='loginForm'>
        <Link to='/MainPage'>
          <button>
            Submit
          </button>
        </Link>
      </div>
    )
  }
}

export default UserInput
