import React, { Component } from 'react';
import './App.css';

class ClockComponent extends Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return(
      <div className="p-6">
        <h1>Hello, world!</h1>
        <h2 className="text-green-400 font-serif font-bold">It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default ClockComponent;


