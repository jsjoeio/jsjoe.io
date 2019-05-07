module.exports = {
  siteMetadata: {
    title: `JavaScript Joe`,
    tagline: `I like getting people excited to learn.`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@jsjoeio`,
    social: {
      twitter: `jsjoeio`,
      devto: `jsjoeio`,
      github: `jsjoeio`
    },
    about: `<p>I'm a frontend engineer, an instructor for <a href='https://egghead.io/instructors/joe-previte' alt="JavaScript Joe's egghead profile" target='_blank' rel='noopener noreferrer'>egghead.io</a>, a member of the <a href='https://www.twilio.com/blog/introducing-twilio-champions-program' alt='Twilio Champions Program blog post.' target='_blank' rel='noopener noreferrer'>Twilio Champions Program</a>, and an organizer for <a href='https://www.meetup.com/desert-graphql-meetup/' alt='Desert GraphQL Meetup page' target='_blank' rel='noopener noreferrer'>Desert GraphQL</a>. In 2018, Twilio inducted me into their <a href='https://doers.twilio.com/' alt='Hall of Doers page.' target='_blank' rel='noopener noreferrer'>Hall of Doers</a>. I used to teach HTML/CSS and JavaScript workshops for a local meetup <a href='https://www.meetup.com/Thinkful-Phoenix/' alt='Learn to Code Thinkful Phoenix meetup page.' target='_blank' rel='noopener noreferrer'>Learn to Code - Thinkful Phoenix</a>.</p>
    <p>When I'm not coding, you might find me reading, working out, playing basketball or riding my bike.</p>`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
