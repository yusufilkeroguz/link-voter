import React from 'react'
import {Grid} from '@material-ui/core'
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'

class Header extends React.Component {
  render() {
    return (
      <Container fixed>
        <Grid container>
          <Typography variant="h4" component="h4">
            Link<b>Voter</b>
          </Typography>
        </Grid>
      </Container>
    )
  }
}

export default Header
