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
        // console.log(firstName)

        // reset  the states 
        // setfirstName("")
        // setlastName("")
        // setEmail("")
        // setpassword("")
        // setconfirmPassword("")
    }

    const [submitted, setsubmitted] = useState(false)

    const handleSubmitted =(e) => {
        e.preventDefault()
        alert("User has been sucessfully created ")
        console.log({firstName})
        setsubmitted(true)
    }

    return (
        <div>
            <h1> testing</h1>
        {   !submitted&& // the ampersands  represnt the if statement
        <form onSubmit={handleSubmitted}>
        <div>
            <p> first name:</p>
            <input type="text" name='firstName' 
            onChange={firstNameHandler}
            // onChange={(e)=> setfirstName(e.target.value)} 
            value= {firstName}/>

            {firstName.length <3
            <span> user name must be at lest 3 characters </span>

            }

            <button > submit name!</button>
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

            <button > submit name!</button>
        </div>
        </form>

            <p> are u there ?</p>
        </div>
        }


    )
}

export default Form
