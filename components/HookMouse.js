import React, {useState, useEffect} from 'react'

// run an effect in functional component only ones
function HookMouse() {
    // use 2 state variable in array destructuring ini to 0
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    // make use of use effect

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return(() =>{ // use of unmount and cleanup
            console.log('Component unmounting funct comp')
            window.removeEventListener('mousemove', logMousePosition)
        })
    },[]) // to call useEffect only on init render use array []



  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse