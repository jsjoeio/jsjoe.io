import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1>JavaScript Joe</h1>
      <p>I'm a fan of JavaScript.</p>
      <p>Oh and I like to teach.</p>
    </div>
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
