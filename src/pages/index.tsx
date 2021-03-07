import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BlogCardWidget from "../components/widgets/blog-card"

const IndexPage = ({
                     data // this prop will be injected by the GraphQL query below.
                   }) => (
  <Layout>
    <SEO title="Home"/>

    <div className={"container"}>
      <div className={"row"}>

        {data.allMdx.edges.map((item) => (
          <div className={"col-md-12"}>
              <BlogCardWidget data={item.node}/>
          </div>
        ))}
      </div>
    </div>

  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
  query  {
  allMdx(limit: 10) {
    totalCount
    edges {
      node {
        body
        slug
        excerpt
        frontmatter {
          slug
          title
          author
          banner
        }
      }
    }
  }
}

`