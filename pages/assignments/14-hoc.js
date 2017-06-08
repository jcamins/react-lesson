import React from 'react'

export const higherOrderComponent = (x) => x;

class InnerComponent extends React.PureComponent {
    render() {
        return (
            <div>
                <span>ID:</span>
                <span>{this.props.id}</span>
            </div>
        );
    }
}

/*
export default higherOrderComponent({
    title: 'This is wrapped',
    id: 21
})(InnerComponent);
*/