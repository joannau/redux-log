import React, { Component} from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import Echarts from 'echarts';
import './china';
import './macarons'
import './shine'

class ChinaMap extends Component {
    constructor(props) {
        super(props);

        this.setOption = this.setOption.bind(this);
        this.onReady = this.onReady.bind(this);
    }

    componentDidMount() {
        this.echarts = Echarts.init(this.refs.mapReact,'macarons');

        this.setOption(this.props.data);

        this.onReady(this.echarts);
    }

    onReady = (echarts) => {
        this.props.onReady(echarts);
    }

    componentWillReceiveProps(newProps) {
        this.setOption(newProps.data);
    }

    setOption(data) {
        this.echarts.setOption(data);
    }

    render() {
        return (
            <div ref="mapReact" style={{width: '100%', height: '100%'}}></div>
        )
    }

}

ChinaMap.propTypes = {
    data: PropTypes.object
}

ChinaMap.defaultProps = {
    data: {}
}

export default ChinaMap;