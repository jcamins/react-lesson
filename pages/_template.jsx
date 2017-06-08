import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import 'css/main.css';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/cj3oay8lr42sz01987bpjn76u',
        credentials: 'same-origin'
    })
});

export default class Template extends React.Component {
    static propTypes = {
        children: PropTypes.any
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <Helmet
                      title={config.siteTitle}
                      meta={[
                        { name: "description", content: "Learn React" },
                      ]}
                    />
                    {this.props.children}
                </div>
            </ApolloProvider>
        )
    }
}
