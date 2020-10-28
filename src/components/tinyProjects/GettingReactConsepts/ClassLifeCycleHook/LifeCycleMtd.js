import React, { Component } from "react";
import { Button } from "react-bootstrap";

class LifeCycleHooks extends Component {
  state = {
    count: 1,
  };
  componentDidMount = (el) => {
    console.log("componentDidMount");
  };

  componentWillReceiveProps = (newState, prevState) => {
    console.log("componentWillReceiveProps");
  };

  componentWillMount = () => {
    console.log("componentWillMount");
  };

  getCalled = () => {
    this.setState({ count: this.state.count + 1});
    console.log(this.state.count)
  };
  render() {
    return (
      <div>
        Hii
        <Button onClick={this.getCalled}> Goties </Button>;
      </div>
    );
  }
}

export default LifeCycleHooks;
