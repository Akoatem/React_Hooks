import React, {useState }from 'react'


// create hooks using object as state variables
// a state variable can be any datatype

function HookCounterThree() {
    const [name, setName] = useState({first_name: '', last_name: ''})
  return ( // use for form espacially
    <form>
        <input type='text' 
        value={name.first_name}
        onChange={e => setName({...name, first_name: e.target.value})}/>
        {/* make use of spread operator in ES6 ...name, hooks dont auto update object
        you have to manually do it yourself unless using class component */}
        <input type='text'  
        value={name.last_name}
        onChange={e => setName({...name, last_name: e.target.value})} />

        <h2>Your first name is -{name.first_name}</h2>
        <h2>Your last name is  -{name.last_name}</h2>
        {/* display the name state variable using json */}
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounterThree