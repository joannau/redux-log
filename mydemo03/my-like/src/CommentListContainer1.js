import React, { Component } from 'react';
import CommentList from './CommentList'

class CommentListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null,
            value: null
        };
    }

    componentDidMount() {
        this.props.promise.then(response => response.json())
            .then(value => this.setState({loading: false, value}))
            .catch(error => this.setState({loading: false, error}));
    }

    render() {
        if(this.state.loading) {
            return <span>loadinging.....</span>
        } else if(this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>
        }else {
            const list = this.state.value.commentList;

            return (
               <CommentList comments={list}></CommentList>
            )
        }
    }

}

export default CommentListContainer;