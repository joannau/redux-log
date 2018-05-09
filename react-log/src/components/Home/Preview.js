import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Preview.css';

class Preview extends Component {
    static propTypes = {
        title: PropTypes.string,
        link: PropTypes.string
    };

    render() {
        return (
            <article className="article-preview-item">
                <hi className="title">{this.props.title}</hi>
                <span className="date">{this.props.date}</span>
                <p className="desc">{this.props.description}</p>
            </article>
        )
    }
}

