import React, { useState } from "react";
import "./css/FormOptionTemplate.css";

//? -------- IMP Component Parameters starts -------

// const Props = {
//   select: "multiple", OPTIONAL
//   props: {
//     LabelText: "questionLine",
//     ValueOptions: [option1, option2],
//   },
//   selectedValue: AddSelectedOption return Arr,
// };

//? --------- IMP Component Parameters Ends ---------

const FormOptionTemplate = (props) => {
  const [ButtonForm, setButtonForm] = useState("");

  const handleChange = (e) => {
    if (!ButtonForm.includes(e.target.dataset.value)) {
      // protect From multiple select of same el

      setButtonForm([...ButtonForm, e.target.dataset.value]);
    } else if (ButtonForm.includes(e.target.dataset.value)) {
      //   remove Item on duble click
      // Create a copy of ButtonForm
      const a = ButtonForm.slice();
      a.splice(a.indexOf(e.target.dataset.value), 1);
      setButtonForm(a);
    }
    // else return null;

    if (e.target.value !== "") {
      setButtonForm([e.target.value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ButtonForm === "") {
      // Sets Default Vaule if not selected
      props.selectedValue([props.props.ValueOptions[0]]);
    } else {
      props.selectedValue(ButtonForm);
    }
  };

  const renderMultipleSelectForm = (props) => {
    return (
      <div className="InputFormTemplate__select--body">
        <label>{props.props.LabelText}</label>

        {props.props.ValueOptions.map((el, index) => (
          <button key={index} data-value={el} onClick={(e) => handleChange(e)}>
            {el}
          </button>
        ))}
        <input type="submit" onClick={(e) => handleSubmit(e)} value="submit" />
      </div>
    );
  };

  const renderSingleSelectForm = (props) => {
    return (
      <div className="InputFormTemplate__select--body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>{props.props.LabelText}</label>

          <select value={ButtonForm} onChange={(e) => handleChange(e)}>
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

  // const renderErrorHandling = () => {
  //   console.error("Wrong Props Type");
  //   return null;
  // };

  // If user added form type "button"|| "select" use that else use default "button" type
  //   if (props.type == undefined) setFormType(props.type);
  return (
    <>
      <div>{props.select === "multiple" ? renderMultipleSelectForm(props) : renderSingleSelectForm(props)}</div>
    </>
  );
};

export default FormOptionTemplate;
