import React, { Component } from 'react'

export class PersonCard extends Component {
    constructor(props){
        super(props);
            this.state = {
                // addYear : age ++       // will this work ?
                addYear : 55
            }
        }
        addToYear = () =>{
            this.setState({addYear: this.state.addYear +1})
        }


    render(){
        const{firstName, lastName, age, hairColor} = this.props
        return (
            <div>
                <h1> {lastName}, {firstName}</h1>
                <p> hair color : {hairColor}</p>
                {/* <p> age: {age {this.state.addYear}}</p>  */}
                {/*  if age prop is use will there be conflict  */}
                <p> age: {this.state.addYear}</p>
                {/* <button on onClick={({age}) => this.setState({addYear: this.state.addYear  */}
                {/* +1})}> add to age </button> */}

                <button onClick={this.addToYear}> add a year !</button>

            </div>
    );
}
}

export default PersonCard