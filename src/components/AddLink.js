import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/icons/Link';
import {Grid} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Header from './Header'

class AddLink extends React.Component {
  constructor(props) {
    super(props)

    this.addLink = this.addLink.bind(this)
  }

  addLink() {

  }

  render() {
    return (
      <div>
        <Header />

        <Container fixed>
          <Grid container spacing={1}>
            <Grid item>
              <form action="" onSubmit={this.addLink}>
                <FormControl>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Site Name
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <Link />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </form>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="input-with-icon-adornment">
                  URI
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <Link />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default AddLink
