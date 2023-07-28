import React, { Component } from 'react'

// run an effect in class component only ones
export class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x: 0, // variable to store x and y 
         y: 0
      }
    }
logMousePosition = e => {
    this.setState({x: e.clientX, y: e.clientY})
}
//
componentDidMount(){
    window.addEventListener('mousemove', this.logMousePosition)
}

// use of unmount and cleanup, but best applicable 
componentWillUnmount(){
  console.log('Component unmounting class comp')
  window.removeEventListener('mousemove', this.logMousePosition)
}

  render() {
    return (
      <div>
        X - {this.state.x} Y- {this.state.y}
      </div>
    )
  }
}

export default ClassMouse