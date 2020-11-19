import React, { Component, lazy, Suspense } from "react";
import TextLengthChecker from "./tinyProjects/project-textLengthChecker/TextLengthChecker";
import SearchCountries from "./tinyProjects/Search/CreatingMySearch";
import WeatherApp from "./tinyProjects/Weather_App/weatherApp";
import QuizApp from "./tinyProjects/QuizApp/QuizApp";
// import UserInputOutput from "./project-userInputoutput/UserInputOutput";
const UserInputOutput = lazy(() => import("./tinyProjects/project-userInputoutput/UserInputOutput"));

class ToggleProject extends Component {
  state = {
    displaySolution: true,
    displayProjectID: "01",
    displayName: "project 1",
    optionValue: "Lime",
    SelectOptions: { HackerRank: false },
  };

  // Display Project
  displayProjectID = () => {
    // change the Value of Project to "01" where the number of project ends

    this.state.displayProjectID === "01"
      ? this.setState({ displayProjectID: "02", displayName: "project 2" })
      : this.state.displayProjectID === "02"
      ? this.setState({ displayProjectID: "03", displayName: "project 3" })
      : this.state.displayProjectID === "03"
      ? this.setState({ displayProjectID: "04", displayName: "project 4" }) // total no. of project is   currently 4 hence stoping it at 1
      : this.state.displayProjectID === "04"
      ? this.setState({ displayProjectID: "05", displayName: "project 5" })
      : this.state.displayProjectID === "05"
      ? this.setState({ displayProjectID: "06", displayName: "project 6" })
      : //  this.state.displayProjectID === "06"
        // ? this.setState({ displayProjectID: "07", project 7 })
        // : this.state.displayProjectID === "01";
        this.setState({ displayProjectID: "01", displayName: "project 1" });
  };

  // Toggle Project Solution
  displayProjectSolution = () => {
    this.state.displaySolution === true ? this.setState({ displaySolution: false }) : this.setState({ displaySolution: true });
  };

  handleChange = (event) => {
    this.setState({ optionValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.optionValue === "HackerRank") {
      this.setState({ SelectOptions: { HackerRank: true } });
    }

    if (this.state.optionValue === "Default") {
      this.setState({ SelectOptions: { Default: true } });
    }

    if (this.state.optionValue === "HackerRank") {
      this.setState({ SelectOptions: { HackerRank: true } });
    }

    if (this.state.optionValue === "HackerRank") {
      this.setState({ SelectOptions: { HackerRank: true } });
    } else {
      this.setState({ SelectOptions: false });
    }
  };

  render() {
    console.log(this.state.optionValue);
    return (
      <div>
        {this.state.SelectOptions.HackerRank ? (
          <>
            <button type="submit" onClick={this.displayProjectID}>
              {this.state.displayName}
            </button>
          </>
        ) : null}

        <button type="submit" onClick={this.displayProjectID}>
          {this.state.displayName}
        </button>
        {/* CREATING A SORTING FUNCTIONALITY */}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={(e) => this.handleChange(e)}>
              <option value="Default">Default</option>
              <option value="lime">Lime</option>
              <option value="HackerRank">HackerRank</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>

        {/*  */}
        {/* <SelectFeature /> */}

        <button type="submit" onClick={this.displayProjectSolution}>
          {this.state.displaySolution === true ? "Hide Solution" : "Watch Solution"}
        </button>

        {/******************* Add Project To Toggle Start **********************/}

        {this.state.displayProjectID === "01" ? (
          <TextLengthChecker DisplaySolution={this.state.displaySolution} />
        ) : this.state.displayProjectID === "02" ? (
          <Suspense fallback={<div>"Loading..."</div>}>
            <UserInputOutput DisplaySolution={this.state.displaySolution} />
          </Suspense>
        ) : this.state.displayProjectID === "03" ? (
          <SearchCountries />
        ) : this.state.displayProjectID === "04" ? (
          <WeatherApp />
        ) : this.state.displayProjectID === "05" ? (
          <QuizApp />
        ) : // ) : this.state.displayProjectID === "03" ? (
        // ADD YOUR PROJECT HERE

        // <Suspense fallback={<div>"Loading..."</div>}>
        //   <UserInputOutput DisplaySolution={this.state.displaySolution} />
        // </Suspense>
        null}

        {/********************* Add Project To Toggle END **********************/}
      </div>
    );
  }
}
export default ToggleProject;

// const SelectFeature = () => {
//   const [state, setState] = useState({ value: "lime" });

//   const handleChange = (event) => {
//     setState({ value: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (event.target.value === "HackerRank") {
//       return <ToggleProject Category={"HackerRank"} />;
//     }
//   };
//   console.log(state);
//   return (
//     <>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <label>
//           Pick your favorite flavor:
//           <select value={state.value} onChange={(e) => handleChange(e)}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="HackerRank">HackerRank</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     </>
//   );
// };

// const HackerRank = () => {
//   console.log("basjfb");
//   return <h1>Hii I got here</h1>;
// };
