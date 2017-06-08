import React from 'react'
import { gql, graphql } from 'react-apollo';
import { higherOrderComponent } from './14-hoc';

const GQL_QUERY = gql`
    query allThings {
        Thing {
            id
            field1
        }
    }
`;

class GQLEnabledComponent extends React.Component {
}

/*
export default higherOrderComponent({
    id: 407,
    title: 'My title',
})(graphql(GQL_QUERY)(GQLEnabledComponent));
*/