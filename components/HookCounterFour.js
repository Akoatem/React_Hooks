import React, {useState} from 'react';

// array objects

function HookCounterFour() {
    const [items ,setItem] = useState([])

    // create a method to addUtems
     const addItem = () =>{
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
         }])
    }

  return (
    <div>
        {/* add button to add items */}
        <button onClick={addItem}>Add a number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default HookCounterFour