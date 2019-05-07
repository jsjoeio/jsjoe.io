import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
      <h3>About</h3>
      <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about }} />
    </section>
  )
}

export default About
