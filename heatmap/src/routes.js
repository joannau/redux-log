import React from 'react'
import { Router, Route, browserHistory} from 'react-router'
// import App from './App';
// import PeopleHeatmap from './heatmap/PeopleHeatmap';
// import Menu1 from './antd/Menu1';
import Chart1 from './echarts/Chart11';
// import 'antd/dist/antd.css'


export default class Root extends React.Component {

    render() {
        return (
            <Router history={browserHistory}>
                {/*<Route component={App} path='/'></Route>*/}
                {/*<Route component={PeopleHeatmap} path='heatmap'></Route>*/}
                {/*<Route component={Menu1} path='menu1'></Route>*/}
                <Route component={Chart1} path='map'></Route>
            </Router>
        )
    }
}

