import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/moleculez/About'
import Speaking from '../components/moleculez/Speaking'
import Writing from '../components/moleculez/Writing'
import Projects from '../components/moleculez/Projects'
import OSS from '../components/moleculez/OSS'
import Newsletter from '../components/moleculez/Newsletter'

const IndexPage = () => (
  <Layout>
    <SEO title='JavaScript Joe' keywords={[`joe previte`, `javascript`, `joe`]} />
    <About />
    <Speaking />
    <Writing />
    <Projects />
    <OSS />
    <Newsletter />
  </Layout>
)

export default IndexPage
