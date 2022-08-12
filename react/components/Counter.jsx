import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.startingCount };
  }

  increment = () => {
    this.setState(oldState => ({
      count: oldState.count + 1
    }));
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState(oldState => ({
        count: oldState.count + 1
      })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  decrement = () => {
    this.setState(oldState => ({
      count: oldState.count - 1
    }));
    this.props.decr('I decremented, yo.');
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment} className="action-btn">+</button>
        <button onClick={this.decrement} className="action-btn">-</button>
        <span className="count-display">{this.state.count}</span>
      </div>
    )
  }
}

export default Counter;
