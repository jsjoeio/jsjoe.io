import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.a`
  color: inherit;
  margin-right: 16px;
  font-size: 1.2rem;
`

const Icon = ({ icon, url, alt }) => (
  <Container alt={alt} href={url} target='_blank'>
    <FontAwesomeIcon icon={icon} />
  </Container>
)

export default Icon
