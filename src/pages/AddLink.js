import React from 'react'

import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { css, jsx } from "@emotion/core";

import { add } from '../actions/add'
import { Link } from "react-router-dom";

import Header from './../components/Header'
import Container from './../components/Container'
import FormGroup from './../components/FormGroup'
import FormButton from './../components/FormButton'

/** @jsx jsx */

const linkStyle = css`
  width: 100%;
  text-align: center;
  text-decoration: none;
  margin-bottom: 1rem;
  
  &:before {
    content: '←';
    padding-right: .5rem;  
  }
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => ({
  add: (payload) => dispatch(add(payload))
})


class AddLink extends React.Component {
  constructor(props) {
    super(props)

    this.addLink = this.addLink.bind(this)
  }

  addLink(event) {
    event.preventDefault()

    const name = document.querySelector('#siteName').value
    const link = document.querySelector('#siteUri').value

    if (!!name && !!link) {
      this.props.add({ name, link })
    }

    return false;
  }

  render() {
    return (
      <>
        <Header />

        <Container>
          <Link to="/" css={linkStyle}>Return To Homepage</Link>

          <Form action="/" onSubmit={this.addLink}>
            <FormGroup id={'siteName'} name={'Site Name'} />
            <FormGroup id={'siteUri'} name={'Site URI'} />
            <FormButton text={'Add'} type={'submit'} />
          </Form>
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLink);
