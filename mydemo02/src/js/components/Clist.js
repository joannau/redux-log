var React = require('react')

export default class Clist extends React.Component {
    render() {
        return (
            <div>
               <p>{this.props.params.id}clist content</p>
            </div>
        )
    }
}

