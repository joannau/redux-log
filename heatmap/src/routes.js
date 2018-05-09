import React from 'react'
import { Router, Route, browserHistory} from 'react-router'
import App from './App';
import PeopleHeatmap from './heatmap/PeopleHeatmap';


export default class Root extends React.Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route component={App} path='/'></Route>
                <Route component={PeopleHeatmap} path='heatmap'></Route>
            </Router>
        )
    }
}

