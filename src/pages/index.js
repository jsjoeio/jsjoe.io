import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/molecules/About'
import Speaking from '../components/atoms/Speaking'
import Writing from '../components/molecules/Writing'
import Projects from '../components/molecules/Projects'

const IndexPage = () => (
  <Layout>
    <SEO title='JavaScript Joe' keywords={[`joe previte`, `javascript`, `joe`]} />
    <About />
    <Speaking />
    <Writing />
    <Projects />
  </Layout>
)

export default IndexPage
