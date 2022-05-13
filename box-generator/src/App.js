import React from "react";
import { useState } from "react";
import Boxdisplay from "./components/Boxdisplay";
import Form from "./components/Form";


function App() {
  // the app jsx must have all the functions needed to send to children 
  //componets as children cannot relay an info to parents or siblings 

  // functions having to do with colors 
  // set intial state  for color 
  const [colors, setColors] = useState([]) // you can start with an emprt array or hard code values to diplay 
  
  // the function below will manipulate the intial state via "setColor"
  const addColor =(newColor) =>{
    // keep new state intact with old state
    setColors([...colors, newColor])
  }
  // functions having to do with form 
  return (
    <div >
      <fieldset>
          <h1> main component/ app js</h1>
          <div>
              <fieldset>
                <p>
                  form component: <Form addColor={addColor}/>
                </p>
              </fieldset>
          </div>
          <div>
          <fieldset>
            <p>
              display component :<Boxdisplay allcolors={colors}/>
            </p>
          </fieldset>
        </div>
      </fieldset>

    </div>
  );
}

export default App;
