import React from 'react';
import {Link} from 'react-router'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            miniHeader: false
        }
        this.switchHeader = this.switchHeader.bind(this);
    }

    switchHeader() {
        this.setState({miniHeader: !this.state.miniHeader})
    }

    render() {

        const styleHeader = {
            header: {
                backgroundColor: '#333',
                paddingBottom: this.state.miniHeader ? '15px' : '30px'
            }
        };

        return (
            <header style={styleHeader.header} className='smallFont'>
                <h1>这里是头部</h1>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/detail'}>detail</Link></li>
                    <li><Link to={'/list/1234'}>list</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header;