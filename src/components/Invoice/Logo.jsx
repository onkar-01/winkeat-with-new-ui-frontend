import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  margin: 20px 0 70px 0;
`

const LogoImage = styled.img.attrs({
  src: 'logo.png',
})`
  height: 25px;
`

const Logo = () => (
  <LogoContainer>
    <LogoImage />
  </LogoContainer>
)

export default Logo
