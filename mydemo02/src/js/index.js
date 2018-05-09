var React = require('react')
import Header from './components/hearder'
import BodyIndex  from './components/BodyIndex'
import Footer from './components/Footer'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <BodyIndex></BodyIndex>
                <div>
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

