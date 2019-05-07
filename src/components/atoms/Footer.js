import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import SocialIcons from '../molecules/SocialIcons'

const Container = styled.footer`
  text-align: center;
  margin-top: 32px;
  a {
    text-decoration: none;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          footer
        }
      }
    }
  `)
  return (
    <Container>
      <SocialIcons />
            © {new Date().getFullYear()}{' '}<span dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.footer }} />
    </Container>
  )
}

export default Footer
