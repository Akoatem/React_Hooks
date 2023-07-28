import React, { Component } from 'react'

// useEffect in react with class component
export class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: '' // use conditionally run effect
      }
    }
    // didmount method which set the state
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
   // didUpdate method which update the set state
   componentDidUpdate(prevProps, prevState){
    if(prevState.count != this.state.count){
        console.log('Updating document title')
        document.title = `Clicked ${this.state.count} times` 
    }
   }

  render() {
    return (
      <div>
        {/* when using string input */}
        <input type='text' 
        value={this.state.name} 
        onChange={e => this.setState({name: e.target.value}) }/>

        <button onClick={() => this.setState({count: this.state.count + 1})}>
         Click{this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounterOne