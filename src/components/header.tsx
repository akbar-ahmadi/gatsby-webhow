import * as React from "react"
import * as PropTypes from "prop-types"
import './header.scss'

const Header = ({ siteTitle }) => (
  <header className={"header"}>
    <div className={"container"}>
      <div className={"header__section header__title"}>
        <h1><a href={'/'}>{siteTitle}</a></h1>
      </div>
      <div className={"header__section header__social"}>
        <ul>
          <li><a href={"/"}>اینستاگرام</a></li>
          <li><a href={"/"}>لینکدین</a></li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
