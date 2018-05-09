import React from 'react'
import { Router, Route, hashHistory} from 'react-router'
import ReactDOM from 'react-dom'
import {Button} from 'antd'
import 'antd/dist/antd.css'


export default class Root extends React.Component {

    render() {
        return (
          <Router history={hashHistory}>
              <Route component={Index} path='/'></Route>
          </Router>
        )
    }
}

ReactDOM.render(<Root></Root>,document.getElementById('root'));