import React from 'react';

class BoilingVerdict extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        const txt = this.props.celsius >= 100 ? 'water will boiling.' : 'water will not boiling.';
        return (
            <p>{txt}</p>
        )
    }
}

export default BoilingVerdict;