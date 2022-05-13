import React from 'react'

const Boxdisplay = (props) => {
    // from app js  we need a function that will render on this component 
    const {allColors} = props
  return (
    <div>Im from Boxdisplay jsx
        <div>
            allColors.map.(color,i) => {
                return(
                    <div key={i}>
                        {color}
                    </div>
                )
            }
        </div>
    </div>
    


  )
}

export default Boxdisplay