import React, {useState, useEffect} from 'react'


// useEffect in hook react with functional component
function HookCounterOne() {
    const [count, setCount] = useState(0)

    // use conditionally run effect
    const [name, setName]  = useState('')

// useEffect method update the document title
// useEffect runs after every render of the component
// useEffect is place inside the component
    
   useEffect(() =>{
    console.log('useEffect-Updating document title')
    document.title = ` You Clicked ${count} times`
   },[count]) // use array instead run effect, a good optimization technique to notice
 
  return (
    <div>
         {/* when using string input */}
        <input type='text' value={name} onChange={e => setName(e.target.value)} />

        <button onClick={() => setCount(count + 1)}> Click{count} times</button>
    </div>
  )
}

export default HookCounterOne