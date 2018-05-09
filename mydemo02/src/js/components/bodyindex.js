import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BodyChild from './bodychild'
import Calculator from './Calculator'

import ReactMixin from 'react-mixin'
import MixinLog from './mixins'

const defaultProps = {
    userId: 1000
}
export default class BodyIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            username: 'zhj'
        }
        this.changeUserInfo = this.changeUserInfo.bind(this)
        this.handleChildInput = this.handleChildInput.bind(this)
    }

    changeUserInfo() {
        this.setState({username: 'zxj'})

        // const btn1 = document.getElementById('btn1');
        // ReactDOM.findDOMNode(btn1).style.color = 'pink';

        console.log(this.refs.btn1);
        this.refs.btn1.style.color = 'yellow'

        MixinLog.log();

    }

    handleChildInput(event) {
        this.setState({username: event.target.value})
    }

    render() {

        return (
            <div>
                <p>这里是content</p>
                <p>{this.state.username} {this.props.userId}</p>
                <input id='btn1' ref='btn1' type="button" value="提交" onClick={this.changeUserInfo}/>
                <BodyChild {...this.props} handleChildInput={this.handleChildInput}></BodyChild>
                <Calculator></Calculator>
            </div>
        )
    }

}

BodyIndex.propTypes = {
    userId: PropTypes.number
};
BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.prototype,MixinLog);