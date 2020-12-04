// Objective is to create a selective view form
import React from "react";
import "./css/FormOptionBtnTemplate.css";
// const Props = {
//   props: {
//     LabelText: "questionLine",
//     ValueOptions: [option1, option2],
//     returnValue: "Selected Option",
//     Styles,
//   },
//   selectedValue: AddSelectedOption,
// };

// TODO add multiple select and search functionality
const FormOptionSelectTemplate = (props) => {

  const handleChange = (e) => {
    // console.log(e.target.value);
    props.selectedValue(e.target.value);
  };

  return (
    <div className="InputFormTemplate-body">
      <label>{props.props.LabelText}</label>

      <div>
        {props.props.ValueOptions.map((el, index) => (
          <button key={index} value={el} onClick={(e) => handleChange(e)}>
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormOptionSelectTemplate;
