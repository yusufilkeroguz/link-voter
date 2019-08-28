import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 .5rem;
  margin: 0 auto;
  flex-wrap: wrap;
  
  @media all and (min-width: 992px) {
    padding: 0 1rem;
    width: 960px;
  }
  
  @media all and (min-width: 1200px) {
    padding: 0 1rem;
    width: 1140px;
  }
`

export default Container
