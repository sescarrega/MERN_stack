import React, {useState} from 'react'

const userForm = (props) => {
    const [firstName, setfirstName] = useState("")
    const[lastName, setlastName ] = useState("")
    const[email, setEmail ] = useState("")
    const[password, setpassword ] = useState("")
    const[confirmPassword, setconfirmPassword ] = useState("")

    const subitHandler = (eventChange) => {
        // stops the form from making a psot request 
        eventChange.preventDefault()
        console.log("registering:", firstName, lastName)

        // reset  the states 
        setfirstName("")
        setlastName("")
        setEmail("")
        setpassword("")
        setconfirmPassword("")
    }
    return (
        <form action="">
        <div>
            <p> first name:</p>
            <input type="text" name='firstName' 
            onChange={(e)=> setfirstName(e.target.value)} 
            value= {firstName}/>

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
            value= {confirmPassword}/>
        </div>
        </form>

    )
}

export default userForm
