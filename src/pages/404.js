import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/404.css"
import Wave from "../components/Wave.js"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="page">
      <div className="pageGroup">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
      <Wave />
    </div>
  </Layout>
)

export default NotFoundPage
