import React, { Component} from 'react';
// import ReactHeatmap from 'react-heatmap';
import ReactHeatmap from './ReactHeatmap';
import ReactDOM from "react-dom";

class PeopleHeatmap extends Component {
    render() {
        const data = [{ x: 10, y: 15, value: 5}, { x: 50, y: 50, value: 2}];
        const heat = {
            "height": "200px",
            "width": "200px"
        };
        const key = true;

        if(key) {
            ReactDOM.render(<ReactHeatmap data={data} />, document.querySelector('.ant-modal-container'));
        }
        return (
            <div style={heat}>
                111
            </div>
        );
    }
}

export default PeopleHeatmap