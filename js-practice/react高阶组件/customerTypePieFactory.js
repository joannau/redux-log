import React, { Component} from 'react';

function customerTypePieFactory(Childern,http,transform) {
    class Controller extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                data: '',
            }
            this.setDate = this.setDate.bind(this);
        }

        componentDidMount() {
            this.setDate(this.props);
        }

        componentWillReceiveProps(nextProps) {
            if(nextProps.endTime != this.props.endTime) {
                this.setDate(nextProps);
            }
        }

        setDate(params) {
            http({
                endTime: params.endTime,
                beginTime: params.beginTime
            }).then((res) => {
                const data = transform(res);
                this.setState({
                    isLoaded: true,
                    data,
                })
            }).catch((error) => {
                this.setState({
                    error
                })
            });
        }

        render() {
            const { error, isLoaded, data} = this.state;
            if(error) {
                return <div>error.</div>
            }else if(!isLoaded) {
                return <div>loading.</div>
            }else {
                return (
                    <Childern series={data} innerSize={148} size={196} height={275}/>
                )
            }
        }
    }
    return Controller;
}


export default customerTypePieFactory;