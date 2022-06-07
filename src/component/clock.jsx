import React from 'react';
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter:0 };
    this.handleCounter = this.handleCounter.bind(this,)
  }

  // 挂载
  componentDidMount() {
  }
  handleCounter(){
    this.setState((state) => ({
      counter: state.counter+1
    }));
  }

  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2 onClick={this.handleCounter}>Count: {this.state.counter}.</h2>
      </div>
    );
  }
}