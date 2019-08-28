import React from 'react'
import styled from '@emotion/styled'

const Logo = styled.h4`
  font-size: 2.125rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.17;
  letter-spacing: 0.00735em;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 2rem;
`

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Logo>
          Link<b>Voter</b>
        </Logo>
      </HeaderContainer>
    )
  }
}

export default Header
