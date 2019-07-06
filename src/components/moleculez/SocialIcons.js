import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { faTwitter, faGithub, faDev } from '@fortawesome/free-brands-svg-icons'
import Icon from '../atoms/Icon'

const socialSites = {
  twitter: {
    url: 'https://twitter.com/'
  },
  github: {
    url: 'https://github.com/'
  },
  devto: {
    url: 'https://dev.to/'
  }
}

const SocialIcons = () => {
  const data = useStaticQuery(graphql`
    query SocialIcons {
      site {
        siteMetadata {
          social {
            twitter
            github
            devto
          }
        }
      }
    }
  `)
  const { twitter, github, devto } = data.site.siteMetadata.social
  return (
    <div>
      <Icon icon={faTwitter} url={`${socialSites.twitter.url}${twitter}`} alt="Link to javascript joe's twitter" />
      <Icon icon={faGithub} url={`${socialSites.github.url}${github}`} alt="Link to javascript joe's github" />
      <Icon icon={faDev} url={`${socialSites.devto.url}${devto}`} alt="Link to javascript joe's dev.to profile" />
      <Icon icon={faEnvelope} url={`${socialSites.devto.url}${devto}`} alt="Link to javascript joe's dev.to profile" />
    </div>
  )
}
export default SocialIcons
