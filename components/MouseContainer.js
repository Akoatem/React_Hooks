import React, {useState} from 'react'
import HookMouse from './HookMouse'
import ClassMouse from './ClassMouse'

// use of unmount and cleanup, but best applicable to class component

function MouseContainer() {
    // using boolean in array distructuring
    const[display, setDisplay] = useState(true)
  return ( // add a button to toogle true or false
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        {/* if display is true, then rerender the hook mount */}
       {display && <HookMouse />}
       {display && <ClassMouse />}  
       {/* class the hook and class comp here */}
    </div>
  )
}

export default MouseContainer