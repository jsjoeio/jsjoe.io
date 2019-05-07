import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.header`
  text-align: center;
  margin-top: 48px;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          tagline
        }
      }
    }
  `)

  return (
    <Container>
      <Title>{data.site.siteMetadata.title}</Title>
      <p>{data.site.siteMetadata.tagline}</p>
    </Container>
  )
}
export default Header
