import React from 'react';

class ClassCounter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }

    plus(){
        this.setState({counter: this.state.counter+1})
    }

    minus(){
        this.setState({counter: this.state.counter-1})
    }

    render() {
         return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
   
}


export default ClassCounter;