import React from 'react'
import Button from './../components/Button'
import styled from '@emotion/styled'

const FormGroup = styled.div`
  flex-basis: 100%;
  flex-grow: 0;
  flex-wrap: nowrap;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

export default (props) => {
  return (
    <FormGroup>
      <Button {...props}>
        {props.text}
      </Button>
    </FormGroup>
  )
}
