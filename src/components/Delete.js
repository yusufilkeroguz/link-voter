import React from 'react'
import styled from '@emotion/styled/macro'

const Button = styled.button`
  appearance: none;
  background-color: #ff0000;
  border-color: #b55454;
  border-radius: 50%;
  padding: .25rem .50rem;
  position: absolute;
  right: -5px;
  top: -8px;
  display: none;
  
  &:after {
    content: '-';
    color: #FFFFFF;
  }
`

export default Button
