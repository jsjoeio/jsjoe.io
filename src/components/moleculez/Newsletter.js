import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../atoms/Title'
import ButtondownEmailFrom from '../atoms/ButtondownEmailForm'
const Newsletter = () => {
  const data = useStaticQuery(graphql`
    query NewsletterQuery {
      site {
        siteMetadata {
          newsletter
        }
      }
    }
  `)
  return (
    <section>
      <Title>Newsletter</Title>
      <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.newsletter }} />
      <ButtondownEmailFrom />
    </section>
  )
}

export default Newsletter
