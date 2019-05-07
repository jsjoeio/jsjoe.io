import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/molecules/About'
import Speaking from '../components/molecules/Speaking'
import Writing from '../components/molecules/Writing'
import Projects from '../components/molecules/Projects'
import OSS from '../components/molecules/OSS'

const IndexPage = () => (
  <Layout>
    <SEO title='JavaScript Joe' keywords={[`joe previte`, `javascript`, `joe`]} />
    <About />
    <Speaking />
    <Writing />
    <Projects />
    <OSS />
  </Layout>
)

export default IndexPage
