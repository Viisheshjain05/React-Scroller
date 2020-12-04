// Objective is to create a selective view form
import React, { useState } from "react";
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

const FormOptionBtnTemplate = (props) => {
  const [Form, setForm] = useState(props.props.ValueOptions[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.selectedValue({ Form });
  };

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <div className="InputFormTemplate-body">
      
      <form onSubmit={(e) => handleSubmit(e)}>
      
        <label>{props.props.LabelText}</label>
        <select value={Form} onChange={(e) => handleChange(e)}>
          {props.props.ValueOptions.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
      
        </select>
      
        <input type="submit" value="Submit" />
      
      </form>
    </div>
  );
};

export default FormOptionBtnTemplate;
