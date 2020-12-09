// TODO create Form input Type Template for Add Tech Item Like Data Below
import React, { useState } from "react";
import "./css/FormInputTemplate.css";

//? -------- IMP Component Parameters starts -------

// const Props = {

// *      For Single input without divided section ex- Payment Options//
//  props:{
//    inputName: "Name Added to dataset ",
//    labelText " :"AddLabelForInputElement"}
//
// *      For Multiple inputs inside one divided section ex- Payment Options
//   Props:{
//  [                                                        Array Of input In Case Of Multiple Option in coloum Else Single Object
//    {inputName: "Name Added to dataset ", i.e- data-name={props.inputName}
//    labelText " :"AddLabelForInputElement"},
//
//    {inputName: "Name Added to dataset ",
//    labelText " :"AddLabelForInputElement"}
//        ] }
//   dividerName: "enter Name Heading In case Of multiple Arguments Only"
//   dividerDataId : "Extra Id Can Be used For Datasets or accessing Divider"
//
// *  Common Parameters
//
//    AutoComplete: "On  "  OPTIONAL
//    DOMStringMap: {
//    key : "dataset.key",
//    value : "dataset.name="value",  default return True || False OPTIONAL
//   },
//    required OPTIONAL defalut off
//    value = "NameOfButton" ex-Submit OPTIONAL Default Save
//   inputValue : "function AddSelectedOption" return Arr,
// };

//? --------- IMP Component Parameters Ends ---------

const FormInputTemplate = (props) => {
  const [ShowInput, setShowInput] = useState(props.props.length > 1 ? true : false);

  const submitHandler = (e) => {
    e.preventDefault();

    // 1) Getting Data For All Inputs
    const arr = [];
    props.props.forEach((i) => {
      /* eslint-disable */
      const str = eval("e.target." + i.inputName + ".value");
      if (str !== "") {
        arr.push([i.inputName, str]);
      } else arr.push([i.inputName, ""]);
    });
    // Convert Array To Object
    let obj = {};
    arr.forEach((data) => (obj[data[0]] = data[1]));
    props.inputValue(obj);
  };

  const RenderSingleInputForm = (props) => {
    return (
      <div className="InputFormTemplate--body ">
        <form onSubmit={(e) => submitHandler(e)}>
          {props.props.map((e, ind) => (
            <React.Fragment key={ind}>
              <label> {e.labelText}</label>
              <div>
                {props.required === true ? <input type="text" name={e.inputName} data-divider={props.dividerDataId} autoComplete="off" required /> : <input type="text" name={e.inputName} data-divider={props.dividerDataId} autoComplete="off" />}
              </div>
            </React.Fragment>
          ))}
          {props.value !== undefined ? <input type="submit" value={props.value} /> : <input type="submit" value="SAVE" />}
        </form>
      </div>
    );
  };

  const RenderMultipleInputForm = (props) => {
    return (
      <div className="InputFormTemplate--body ">
        <div className="InputFormTemplate__showInput">
          <p>{props.dividerName}</p>
          {ShowInput === true ? (
            <button className="InputFormTemplate__showInput" onClick={() => setShowInput(false)}>
              {" "}
              show Input
            </button>
          ) : (
            <button className="InputFormTemplate__showInput" onClick={() => setShowInput(true)}>
              {" "}
              show Input
            </button>
          )}
        </div>

        {ShowInput === true ? (
          <form onSubmit={(e) => submitHandler(e)}>
            {props.props.map((e, ind) => (
              <React.Fragment key={ind}>
                <label> {e.labelText}</label>
                <div>
                  {props.required === true ? <input type="text" name={e.inputName} data-divider={props.dividerDataId} autoComplete="off" required /> : <input type="text" name={e.inputName} data-divider={props.dividerDataId} autoComplete="off" />}
                </div>
              </React.Fragment>
            ))}
            {props.value !== undefined ? <input type="submit" value={props.value} /> : <input type="submit" value="SAVE" />}
          </form>
        ) : null}
      </div>
    );
  };
  return <>{props.props.length > 1 ? RenderMultipleInputForm(props) : RenderSingleInputForm(props)}</>;
};

export default FormInputTemplate;
