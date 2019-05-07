import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import SocialIcons from '../molecules/SocialIcons'

const Container = styled.header`
  text-align: center;
  margin-top: 48px;
  margin-bottom: 36px;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 2.75rem;
    margin: 1rem auto;
  }
`

const Tagline = styled.p`
  margin-bottom: 0;
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
      <Tagline>{data.site.siteMetadata.tagline}</Tagline>
      <SocialIcons />
    </Container>
  )
}
export default Header
