import React, { Component } from 'react'
// ----------- BIG INVERSION -------------
const PersonCard = props => {
    return (
        <div>
            <h1> {props.firstName}  {props.lastName}</h1>
            <p> age:{props.age}</p>
            <p>  hair:{ props.hairColor }</p>

        </div>
    )

}



// ------------- PROP IT UP AND PUTTING IT TOGETHER --------------

// export class PersonCard extends Component {
//     constructor(props){
//         super(props);
//             this.state = {
//                 // addYear : age ++       // will this work ?
//                 addYear : this.props.age
//             }
//         }
//         addToYear = () =>{
//             this.setState({addYear: this.state.addYear +1}) 
//         }


//     render(){
//         const{firstName, lastName, age, hairColor} = this.props
//         return (
//             <div>
//                 <h1> {lastName}, {firstName}</h1>
//                 <p> hair color : {hairColor}</p>
//                 {/* <p> age: {age {this.state.addYear}}</p>  */}
//                 {/*  if age prop is use will there be conflict  */}
//                 <p> age: {this.state.addYear}</p>
//                 {/* <button on onClick={({age}) => this.setState({addYear: this.state.addYear  */}
//                 {/* +1})}> add to age </button> */}

//                 <button onClick={this.addToYear}> add a year !</button>

//             </div>
//     );
// }
// }


export default PersonCard