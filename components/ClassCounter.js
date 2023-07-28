import React, { Component } from 'react'

// creating a counter button using class component
class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = { // 1st step create a variable count and init to 0
         count: 0
      }
    }
    // 2nd create a method increment count
    incrementCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    return ( // create a button and insert count increment
      <div>
        <button onClick={this.incrementCount}> Count {this.state.count} </button>
      </div>
    )
  }
}

export default ClassCounter