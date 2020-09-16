// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: [
//         { userName: "Viishesh jain", id: 24132, age: 21 },
//         { userName: "VJ2", id: 24133, age: 22 },
//         { userName: "VJ3", id: 24134, age: 23 },
//         { userName: "VJ4", id: 24135, age: 24 },
//       ],
//       key: "ON",
//       projectRenderOutput: "",
//       out: null,
//       isToggleOn: 1,
//       output: { content: " " },
//       NameChange: " ",
//       IdChange: " ",
//       textBool: null,
//     };
//   }

//   //*********************************** State Modifiers Start ***********************************

//   updateName = () => {
//     this.setState({
//       person: [
//         { userName: this.state.NameChange, id: this.state.IdChange, age: 21 },
//         { userName: "J2", id: 24133, age: 22 },
//         { userName: "VJ", id: 24134, age: 23 },
//         { userName: "V4", id: 24135, age: 24 },
//       ],
//     });
//   };

//   autoAssignHandler = (event) => {
//     const cloneState = this.state.person.slice();

//     for (let i = 0; i < 4; i++) {
//       const changeId = Math.round(Math.random() * 100000);
//       const changeName = Math.random().toString(36).slice(4, 10);
//       cloneState[i].id = changeId;
//       cloneState[i].userName = changeName;
//     }

//     this.setState({
//       person: cloneState,
//     });
//   };

//   updateNameHandler = (event) => this.setState({ NameChange: event.target.value });

//   updateIdHandler = (event) => this.setState({ IdChange: event.target.value });

//   //*********************************** State Modifiers End ***********************************

//   //*********************************** RenderProject Conditionally Start ***********************************

//   FixDisplay = () => (this.state.key === "OFF" ? this.setState({ key: this.state.storekey, out: this.state.storeOut }) : this.setState({ key: "OFF", out: "OFF" }));

//   projectOutput = () => {
//     if (this.state.out === "pro1") {
//       this.setState({
//         projectRenderOutput: "Project1",
//         out: "out",
//         storeOut: "pro1",
//       });
//     } else if (this.state.out === "pro2") {
//       this.setState({
//         projectRenderOutput: "Project2",
//         out: "out",
//         storeOut: "pro2",
//       });
//     } else if (this.state.out === "out") {
//       this.setState({
//         projectRenderOutput: null,
//       });

//       if (this.state.key !== "ON") {
//         this.setState({
//           out: this.state.storeOut,
//         });
//       }
//     }
//     // console.log(`key : ${this.state.key} , out : ${this.state.out} `);
//   };

//   displayProject = () => {
//     if (this.state.key === "ON") {
//       this.setState({
//         output: {
//           content: (
//             <div>
//               <ProjectDetails1 />
//             </div>
//           ),
//         },

//         projectRenderOutput: null,
//         out: "pro1",
//         key: "2",
//         storekey: "2",
//         storeOut: "pro1",
//       });
//     } else if (this.state.key === "2") {
//       this.setState({
//         output: {
//           content: (
//             <div>
//               <ProjectDetails2 />
//             </div>
//           ),
//         },
//         projectRenderOutput: null,
//         out: "pro2",
//         key: "3",
//         storekey: "3",
//         storeOut: "pro2",
//       });
//     } else if (this.state.key === "3") {
//       this.setState({
//         output: {
//           content: " ",
//         },
//         out: "out",
//         key: "ON",
//         projectRenderOutput: null,
//       });
//     }
//     // console.log(`key : ${this.state.key} , out : ${this.state.out} `);
//   };

//   //*********************************** RenderProject Conditionally End ***********************************

//   countLength = (event) => {
//     this.setState({ textLength: event.target.value.length, text: event.target.value });

//     this.state.textLength < 11 ? this.setState({ textStatus: "MAN LIMIT SHORT", textBool: true }) : this.setState({ textStatus: "MAN LIMIT BIG", textBool: false });
//   };

//   render() {
//     return (
//       <div className={classes.app}>
//         {/************************************************ Dev Test Place ************************************************/}

//         {/* <TextLength change={(event) => this.countLength(event)} textLength={this.state.textLength} textStatus={this.state.textStatus} textBool={this.state.textBool} text={this.state.text} /> */}

//         {/************************************************ Dev Test Place ************************************************/}

//         {/************************ Dynamically Rendered Project2 Output Start ************************/}

//         <div>{this.state.output.content}</div>

//         {this.state.projectRenderOutput === "Project2" ? (
//           <div>
//         {/* <TextLength change={(event) => this.countLength(event)} textLength={this.state.textLength} textStatus={this.state.textStatus} textBool={this.state.textBool} text={this.state.text} /> */}
//           </div>
//         ) : null}

//         {/************************ Dynamically Rendered Project2 Output End ************************/}

//         {/************************ Dynamically Rendered Project1 Output Start ************************/}

//         {this.state.projectRenderOutput === "Project1" ? (
//           <div>
//             <UserOutput name={this.state.person[0].userName} age="23">
//               WebDeveloper
//             </UserOutput>

//             <UserInput changeName={this.updateNameHandler} changeId={this.updateIdHandler} userName={this.state.person[0].userName} id={this.state.person[0].id} />
//           </div>
//         ) : null}

//         {/************************ NAVBAR START ************************/}

//         <div style={{ backgroundColor: "hsla(224, 61%, 78%, 0.281)", position: "fixed", left: "0", top: "0", width: "100%", color: "white", textAlign: "center" }}>
//           {this.state.projectRenderOutput === "Project1" ? (
//             <div style={{ position: "inherit", marginLeft: "50px" }}>
//               <button type="submit" onClick={this.autoAssignHandler}>
//                 Auto Assign
//               </button>

//               <button type="submit" onClick={this.updateName} value={this.state.propChange}>
//                 Update
//               </button>
//             </div>
//           ) : null}
//           {/************************ Dynamically Rendered Project1 buttons Output End ************************/}

//           <button type="submit" onClick={this.FixDisplay}>
//             {this.state.key === "OFF" ? "Fix Project" : "Change Project"}
//           </button>

//           {/*********************** Change Project Buttons Start ************************/}
//           <button type="submit" onClick={this.displayProject}>
//             Project Details
//           </button>

//           <button type="submit" onClick={this.projectOutput}>
//             Project Output
//           </button>

//           {/*********************** Change Project Buttons End ************************/}
//         </div>

//         {/************************ NAVBAR START ************************/}
//       </div>
//     );
//   }
// }

// export default App

import React, { Component } from "react";
import TextLengthChecker from "./project-textLengthChecker/TextLengthChecker";

class TinyProject extends Component {
  state = {
    DisplaySolution: true,
  };

  DisplayProjectSolution = () => {
    this.state.DisplaySolution === true ? this.setState({ DisplaySolution: false }) : this.setState({ DisplaySolution: true });
    console.log("state", this.state.DisplaySolution);
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.DisplayProjectSolution}>
          {this.state.DisplaySolution === true ? "Hide Solution" : "Watch Solution"}
        </button>

        <TextLengthChecker DisplaySolution={this.state.DisplaySolution} />
      
      </div>
    );
  }
}

export default TinyProject;