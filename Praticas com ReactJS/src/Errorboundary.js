import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error)
        console.log('erroInfo', errorInfo)
        this.setState({
            hasError:true
        })
    }

    render(){
        if(this.state.hasError) {
            return <div>error</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary;