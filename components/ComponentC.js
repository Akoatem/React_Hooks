import React from 'react'
import ComponentE from './ComponentE'

// The use of context with many branches in React

function ComponentC() {
  return (
    <div>
        <ComponentE/>
    </div>
  )
}

export default ComponentC