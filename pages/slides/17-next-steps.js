import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class NextSteps extends React.Component {
    render() {
        return (
            <div>
                <h1>Next steps</h1>
                <p>Further reading at <Link to={prefixLink('/notes/')}>/notes/</Link></p>
                <p>Turn your profile into something useful</p>
                <p>Style your profile</p>
                <p><em>Ask questions!</em></p>
            </div>
        )
    }
}



