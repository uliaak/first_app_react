import React from "react";


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: 0
        };

        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    
    handleClickPlus() {

        this.setState({
            counts: this.state.counts + 1
        })
    }

    handleClickMinus() {

        this.setState({
            counts: this.state.counts - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickPlus}> Plus </button>  
                <button onClick={this.handleClickMinus}> Minus </button>    
                <h2>counts: {this.state.counts} </h2>      
            </div>
        )
    }
}

export default Clock;