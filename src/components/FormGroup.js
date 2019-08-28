import React from 'react'
import Input from './../components/Input'
import styled from '@emotion/styled'

const Label = styled.label`
  padding-right: .5rem;
`

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
      <Label htmlFor={props.id||'undefined'}>{props.name||'undefined'}:</Label>
      <Input type={props.type||'text'} id={props.id||'undefined'} />
    </FormGroup>
  )
}
