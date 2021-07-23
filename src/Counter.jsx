import React, { Component } from 'react';


export class Counter extends Component {
  constructor(props){
    super(props);
    this.state = { clicks: props.initialAmount, list: [{id:1, name: "Deepika"}, {id: 2, name: "Maha"}]}
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("-------->", newProps);
    const val = parseInt(newProps.initialAmount);
    this.setState({ clicks: val } );
  }
  onChangeClick = (amount) => {
    this.setState(prevState => {
       return { clicks: prevState.clicks + amount }
     }
    );
  }

  renderList = () => {
    return this.state.list.map( (item) => (<li key={item.id}>{item.name}</li>))
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onChangeClick(-1)}>-</button>
        {this.state.clicks}
        <button onClick={() => this.onChangeClick(1)}>+</button>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default Counter
