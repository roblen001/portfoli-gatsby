import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site(siteMetadata: {}) {
      siteMetadata {
        author
        siteDescription: description
        siteUrl
        siteTitle: title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteDescription, siteTitle, siteUrl } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta
        name="description"
        content={description}
        content={description || siteDescription}
      />
    </Helmet>
  )
}

export default SEO
