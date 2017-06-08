import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div className="indented">
        <h1>
          Interactively learn React
        </h1>
        <h2>
          Prepared by Jared Camins-Esakov
        </h2>
        <ul>
          <li><Link to={prefixLink('/slides/')}>Slides</Link></li>
          <li><Link to={prefixLink('/assignments/')}>Assignments</Link></li>
          <li><Link to={prefixLink('/notes/')}>Notes</Link></li>
        </ul>
      </div>
    )
  }
}
