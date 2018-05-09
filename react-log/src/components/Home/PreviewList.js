import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Preview from './Preview';

class PreviewList extends Component {
    static propTypes = {
        articleList: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        return this.props.articleList.map(item => (
            Preview
        ))
    }
}