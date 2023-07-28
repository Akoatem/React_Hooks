import React, {useState, useEffect} from 'react'


// create a functional interval using timer
function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    // 1st create the tick method
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    // this just like componentDidMount in class component
    useEffect(() =>{
        // always write a function within useEffect and not outside
    //   function doSomething(){
    //     console.log(someProp)
    //   }
      // call it here
    //   doSomething()
      const interval = setInterval(tick, 1000)

      // for cleanup and prevent data leak
      return() =>{
        clearInterval(interval)
      }
    }, []) // this will allow the timer to pass ones using the []

  return (
    <div>{count}</div>
  )
}

export default IntervalHookCounter