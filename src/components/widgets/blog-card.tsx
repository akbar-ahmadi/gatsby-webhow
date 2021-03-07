import * as React from "react"
import * as PropTypes from "prop-types"
import "./blog-card.scss"

const BlogCardWidget = ({ data }) => {

  const { frontmatter, excerpt, slug } = data
  const { title, banner, author } = frontmatter
  const bannerImg = banner ? (<img className={"col-md-4 img-fluid"} src={banner}/>) : null
  return (
    <article className={"widget-blog-card row"}>
      {bannerImg}
      <div className={"col-md-8"}>
        <h2><a href={slug}>{title}</a></h2>
        <div>{excerpt}</div>
        <p>{author}</p>
      </div>
    </article>
  )
}

BlogCardWidget.propTypes = {
  data: PropTypes.object,
}


export default BlogCardWidget
