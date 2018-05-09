import React from 'react'

export default class BodyChild extends React.Component {

    render() {
        return (
            <div>
                <p>子页面输入：<input type="text" onChange={this.props.handleChildInput} /></p>
                <p> {this.props.userId} </p>
            </div>
        )
    }
}