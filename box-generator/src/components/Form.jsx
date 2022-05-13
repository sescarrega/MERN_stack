import React, {useState} from 'react'

const Form = (props) => {
    const [color, setColor] = useState("")
    const submitHandler = (e)=> {
        e.preventDefault()
        // add color from line 4 to array of colors from app jsx
        props.addColor(color) // add color did not auto generate possible error here 
    }
  return (
    <div> 
        <h1>
        im from form jsx
        </h1>
        <form onSubmit={submitHandler}> 
            <label> 
                Color:
            </label>
            {/* <input onChange={(e) => setColor(e.target.value)}> 
            add color
            </input>  */}
            {/*  the input is interupting rendering  */}
            <button> add Color</button>
        </form>

    </div>
  )
}

export default Form
