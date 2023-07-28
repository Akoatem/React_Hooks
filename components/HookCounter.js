import React,{useState} from 'react'; 

// 1st step import useState for hooks

// create a counter using hooks as functional component
function HookCounter() {
    // 2nd call the useState which accept init variable using array destructuring
    // count init to 0 and method capable of changing count variable
    const [count, setCount] = useState(0)

  return ( // insert the count function
    <div>
        <button onClick= {() => setCount(count + 1)}> Count {count}</button>
    </div>
  )
}

export default HookCounter