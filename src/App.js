// import React, { useState } from "react";
// function getInitial() {
//   console.log('run function');
//   return 0;
// }
// function App() {
//   const [count, setCount] = useState(() => getInitial());
//   const decrement = () => {
//     setCount(prevCount => prevCount - 1);
//   }
//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   }
//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <span>{count}</span>
//       <button onClick={increment}>+</button>
//     </>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Counter from "./Counter";

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: 10}
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  render() {
    return (
       <>
         <input type="number" onChange={this.handleChange} value={this.state.value}/>
         <Counter initialAmount={this.state.value} />
       </>
    )
  }
}

export default App

