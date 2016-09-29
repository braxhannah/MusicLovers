import React, { Component } from 'react'
import spacing from 'material-ui/styles/spacing'
import { darkWhite, grey900 } from 'material-ui/styles/colors'
import { Chip, Avatar } from 'material-ui'

class MainFooter extends Component {

  styles = {
    footer: {
      color: darkWhite,
      backgroundColor: grey900,
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing.desktopGutter,
      display: 'flex'
    },
    link: {
      color: grey900,
      textDecoration: 'none'
    }
  }

  render () {
    return <div style={this.styles.footer}>
      &copy; 2016 &nbsp;
      <Chip>
        <Avatar src='https://avatars.githubusercontent.com/u/9198320' />
        <a style={this.styles.link} href='https://github.com/braxhannah'>BraxOnBraxOnBrax</a>
      </Chip>
      &nbsp; All rights reserved.
    </div>
  }
}

export default MainFooter
