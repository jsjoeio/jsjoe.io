import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = styled.a`
  color: inherit;
  margin-right: 16px;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    color: rgba(0, 0, 0, 1);
  }
`

const Icon = ({ icon, url, alt }) => (
  <Container alt={alt} href={url} target="_blank">
    <FontAwesomeIcon icon={icon} />
  </Container>
)

export default Icon
