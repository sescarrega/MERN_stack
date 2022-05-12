import React, {useState} from 'react'

const Form = (props) => {
    const [firstName, setfirstName] = useState("")
        console.log("hello")
    // const[lastName, setlastName ] = useState("")
    // const[email, setEmail ] = useState("")
    // const[password, setpassword ] = useState("")
    // const[confirmPassword, setconfirmPassword ] = useState("")

    // const submitHandler = (e) => {
    //      stops the form from making a psot request 
    //      e.preventDefault()
    //      console.log("registering:", firstName, lastName)
    //     console.log(e)
    //     setfirstName(e.target.value)
    const firstNameHandler = (e) => {
        console.log(e)
        setfirstName(e.target.value)

        // reset  the states 
        // setfirstName("")
        // setlastName("")
        // setEmail("")
        // setpassword("")
        // setconfirmPassword("")
    }
    return (
        <div>
            <h1> testing</h1>
        <form action="">
        <div>
            <p> first name:</p>
            <input type="text" name='firstName' 
            onChange={firstNameHandler}
            // onChange={(e)=> setfirstName(e.target.value)} 
            value= {firstName}/>
{/* 
            <p> last name:</p>
            <input type="text" name='lastName' 
            onChange={(e) => setlastName(e.target.value)}
            value= {lastName} />


            <p> Email:</p>
            <input type="text" name='email' 
            onChange={(e) => setpassword(e.target.value)} 
            value= {email}/>


            <p> password:</p>
            <input type="text" name='password' 
            onChange={(e) => setpassword(e.target.value)} 
            value= {password}/>

            <p> confirm password:</p>
            <input type="text" name='confirmPassword' 
            onChange={(e) => setconfirmPassword(e.target.value)}
            value= {confirmPassword}/> */}
        </div>
        </form>
        </div>


    )
}

export default Form
