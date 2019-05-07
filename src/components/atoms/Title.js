import React from 'react'
import styled from 'styled-components'

const Container = styled.h3`
  margin-top: 16px;
`

const SectionTitle = ({ children }) => (
  <Container>{children}</Container>
)

export default SectionTitle
