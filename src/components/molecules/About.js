import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../atoms/Title'

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          about
        }
      }
    }
  `)
  return (
    <section>
      <Title>About</Title>
      <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about }} />
    </section>
  )
}

export default About
