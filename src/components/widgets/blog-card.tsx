import * as React from "react"
import * as PropTypes from "prop-types"
import './blog-card.scss'

const BlogCardWidget = ({ data }) => (
  <article className={"widget-blog-card"}>
   <div>{data.frontmatter.title}</div>
  </article>
)

BlogCardWidget.propTypes = {
  data: PropTypes.object,
}


export default BlogCardWidget
