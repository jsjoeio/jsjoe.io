import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='JavaScript Joe' keywords={[`joe previte`, `javascript`, `joe`]} />
    <div>
      <ul>
        <li>Twitter</li>
        <li>GitHub</li>
        <li>Dev</li>
      </ul>
    </div>
    <section>
      <h3>About</h3>
      <p>Lorem ipsum</p>
    </section>
    <section>
      <h3>Speaking</h3>
      <p>cool stuff here</p>
    </section>
    <section>
      <h3>Writing</h3>
      <ul>
        <li>article</li>
        <li>article</li>
        <li>article</li>
      </ul>
    </section>
    <section>
      <h3>Selected Personal Projects</h3>
      <div>
        <h4>Mentored.dev</h4>
        <p>a game to teach you coding</p>
      </div>
      <div>
        <h4>other thing</h4>
        <p>a game to teach you coding</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
