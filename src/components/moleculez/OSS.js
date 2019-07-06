import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../atoms/Title"

const OSS = () => {
  const data = useStaticQuery(graphql`
    query OSSQuery {
      site {
        siteMetadata {
          pullRequests {
            url
          }
        }
      }
    }
  `)
  return (
    <section>
      <Title>OSS Contributions</Title>
      <p>
        I try contribute to open source whenever I can.
        <br /> If you're logged in to GitHub, you can see{" "}
        <a
          href={data.site.siteMetadata.pullRequests.url}
          target="_blank"
          alt="Link to list of merged PRs."
          rel="noopener noreferrer"
        >
          my contributions here
        </a>
        .
      </p>
    </section>
  )
}

export default OSS
