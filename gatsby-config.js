module.exports = {
  siteMetadata: {
    title: `JavaScript Joe`,
    tagline: `I like getting people excited to learn.`,
    description: `JavaScript Joe's portfolio and website. Also known as Joe Previte.`,
    author: `@jsjoeio`,
    social: {
      twitter: `jsjoeio`,
      devto: `jsjoeio`,
      github: `jsjoeio`
    },
    about: `<p>I'm a frontend engineer, an instructor for <a href='https://egghead.io/instructors/joe-previte' alt="JavaScript Joe's egghead profile" target='_blank' rel='noopener noreferrer'>egghead.io</a>, a member of the <a href='https://www.twilio.com/blog/introducing-twilio-champions-program' alt='Twilio Champions Program blog post.' target='_blank' rel='noopener noreferrer'>Twilio Champions Program</a>, and an organizer for <a href='https://www.meetup.com/desert-graphql-meetup/' alt='Desert GraphQL Meetup page' target='_blank' rel='noopener noreferrer'>Desert GraphQL</a>. In 2018, Twilio inducted me into their <a href='https://doers.twilio.com/' alt='Hall of Doers page.' target='_blank' rel='noopener noreferrer'>Hall of Doers</a>. I used to teach HTML/CSS and JavaScript workshops for a local meetup <a href='https://www.meetup.com/Thinkful-Phoenix/' alt='Learn to Code Thinkful Phoenix meetup page.' target='_blank' rel='noopener noreferrer'>Learn to Code - Thinkful Phoenix</a>.</p>
    <p>I also offer virtual <a href="https://twitter.com/jsjoeio/status/1084602384884523009?s=20" alt='Link to tweet about office hours.' target='_blank' rel='noopener noreferrer'>office hours</a> if you want to chat about coding, get advice, want to teach me something cool, or need somewhere to vent.</p><p>When I'm not coding, you might find me reading, working out, playing basketball or riding my bike.</p>`,
    newsletter: `<p>I send a few emails per month to share things I'm excited about. I'd be delighted if you signed up.</p>`,
    portfolio: [
      {
        title: '[MVP] mentored.dev',
        description: 'A "gamified" learning platform to help you become a web developer. The idea is that it will take you from the beginning to being job-ready using interactive dialog-style lessons, quizzes and small tasks.',
        link: 'https://mentored.dev/'
      },
      {
        title: 'Timezoner',
        description: 'A simple Chrome extension to help you coordinate across timezones. Input the date and time of your event and then we give you a link where others can view the event in their respective timezone. Timezoning made easy 👏🏼',
        link: 'https://chrome.google.com/webstore/detail/timezoner/kfnfgcafkeoflpapeniggnnkcaijgbgk'
      }
    ],
    pullRequests: {
      url: 'https://github.com/pulls?q=is%3Apr+author%3Ajsjoeio+-user%3Ajsjoeio+is%3Amerged+is%3Apublic'
    },
    footer: `Made with <a href='https://open.spotify.com/user/12140522458/playlist/4XMKibrbtfYeG83SdVD3Ez?si=Kq2ihazsQY-x58yafKsVaA' alt='Link to Spotify Playlist Tasty Beats.' target='_blank' rel='noopener noreferrer'>🎵</a> and 🍵`
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
        name: `JavaScript Joe`,
        short_name: `jsjoeio`,
        start_url: `/`,
        background_color: `#F4E11E`,
        theme_color: `#F4E11E`,
        display: `minimal-ui`,
        icon: `src/images/jsjoeio-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
