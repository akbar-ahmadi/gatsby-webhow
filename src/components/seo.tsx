import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, withPrefix,graphql } from "gatsby"
const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}

const SEO = ({
               title = ``,
               children = null,
               canonicalUrl = ``,
             }) => {
  const site = useSiteMetadata();

  const {
    description,
    author,
  } = site

  const seo = {
    title: title ,
    description: description ,
  }
  return (
    <Helmet title={seo.title} defaultTitle={seo.title} titleTemplate={`%s | ${seo.title}`}>
      <html lang={'fa'} />
      <meta name="description" content={seo.description} />
      {/*<meta name="image" content={seo.image} />*/}
      <meta property="og:title" content={seo.title} />
      {/*<meta property="og:url" content={seo.url} />*/}
      <meta property="og:description" content={seo.description} />
      {/*<meta property="og:image" content={seo.image} />*/}
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      {/*<meta name="twitter:url" content={seo.url} />*/}
      <meta name="twitter:description" content={seo.description} />
      {/*<meta name="twitter:image" content={seo.image} />*/}
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon-32x32.png`)} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon-16x16.png`)} />
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/apple-touch-icon.png`)} />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {children}
    </Helmet>
  )
}

export default SEO
