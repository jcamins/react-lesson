import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class SlidesIndex extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Slides
        </h1>
        <div>
          <p><Link to={prefixLink('/slides/01-introduction/')}>Introduction</Link></p>
          <p><Link to={prefixLink('/slides/02-es6/')}>ES6</Link></p>
          <p><Link to={prefixLink('/slides/03-functional/')}>Functional JavaScript</Link></p>
          <p><Link to={prefixLink('/slides/04-webapps/')}>Web applications</Link></p>
          <p><Link to={prefixLink('/slides/05-architecture/')}>Web application architecture</Link></p>
          <p><Link to={prefixLink('/slides/06-react/')}>View: React</Link></p>
          <p><Link to={prefixLink('/slides/07-redux/')}>State: Redux</Link></p>
          <p><Link to={prefixLink('/slides/08-graphql/')}>Model: GraphQL</Link></p>
          <p><Link to={prefixLink('/slides/09-webpack/')}>Wiring it up: Webpack</Link></p>
          <p><Link to={prefixLink('/slides/10-assignment/')}>Putting it together: assignment</Link></p>
          <p><Link to={prefixLink('/slides/11-assignment-mechanics/')}>Assignment mechanics: Gatsby</Link></p>
          <p><Link to={prefixLink('/slides/12-classes/')}>Assignment: Classes</Link></p>
          <p><Link to={prefixLink('/slides/13-jsx/')}>Assignment: JSX</Link></p>
          <p><Link to={prefixLink('/slides/14-hoc/')}>Assignment: Higher order components</Link></p>
          <p><Link to={prefixLink('/slides/15-gql-queries/')}>Assignment: GQL queries</Link></p>
          <p><Link to={prefixLink('/slides/16-learnings/')}>Assignment: Learnings</Link></p>
          <p><Link to={prefixLink('/slides/17-next-steps/')}>Next steps</Link></p>
        </div>
      </div>
    )
  }
}


