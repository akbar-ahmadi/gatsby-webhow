/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import Helmet from 'react-helmet'
import * as React from "react"
import * as PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './layout.scss';
import Header from "./header"
import { MDXProvider } from "@mdx-js/react"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div dir={"rtl"}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main  className={'container main-content'}>
        {children}
      </main >
      <Helmet>
        <body dir={'rtl'} />
      </Helmet>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
