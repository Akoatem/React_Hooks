import React, { Component } from 'react'

// create a class interval using timer

class IntervalClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }
    
    // create method of interval time to update the value by 1
    componentWillUnmount(){
        clearInterval(this.interval) // to prevent memory leak
    }
    
    // the tick method increment the value by 1
    tick = () =>{
        this.setState({
          count: this.state.count + 1
        })
    }

  render() {
    return (
       <h1>{this.state.count}</h1>
    )
  }
}

export default IntervalClassCounter