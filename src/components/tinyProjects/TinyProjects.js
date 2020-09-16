import React, { Component } from "react";
import TextLengthChecker from "./project-textLengthChecker/TextLengthChecker";
import UserInputOutput from "./project-userInputoutput/UserInputOutput";

class TinyProject extends Component {
  state = {
    displaySolution: true,
    displayProject: false,
  };

  // Display Project
  displayProject = () => {
    this.state.displayProject === true ? this.setState({ displayProject: false }) : this.setState({ displayProject: true });
  };

  // Toggle Project Solution
  displayProjectSolution = () => {
    this.state.displaySolution === true ? this.setState({ displaySolution: false }) : this.setState({ displaySolution: true });
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.displayProject}>
          {this.state.displayProject === true ? "Project 1" : "Project 2"}
        </button>

        <button type="submit" onClick={this.displayProjectSolution}>
          {this.state.displaySolution === true ? "Hide Solution" : "Watch Solution"}
        </button>


        {this.state.displayProject === true ? 
        <TextLengthChecker DisplaySolution={this.state.displaySolution} /> 
        
        : this.state.displayProject === false ? 
        <UserInputOutput DisplaySolution={this.state.displaySolution} /> 
        
        : null}

      </div>
    );
  }
}

export default TinyProject;
