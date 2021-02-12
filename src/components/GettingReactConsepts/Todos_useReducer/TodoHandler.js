import React, { useReducer } from "react";
import { ACTIONS } from "./Todos";

// ? Parameters

//   Props.Todos = {Contains Current todo} //Array Of todos
//   payload={type : "Return Button Type" , deleteTodo: "todo Name To Delete" }
// }

const initialState = { TodoStatusColor: "black", deleteTodo: false };
const TodoHandler = (props) => {
  const reducer = (state, action) => {
    switch (action.buttonType) {
      case ACTIONS.completeBtn:
        return { TodoStatusColor: action.color };

      default:
        return null;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {props.Todos ? (
        <div className="todo__body--item">
          <span style={{ color: state.TodoStatusColor }}>{props.Todos}</span>

          <input
            type="button"
            className="alignLeft"
            value="Mark Complete"
            onClick={() => dispatch({ buttonType: ACTIONS.completeBtn, color: state.TodoStatusColor === "black" ? "Grey" : "black" })}
          />

          <input type="button" value="Delete Todo" onClick={() => props.payload({ type: ACTIONS.DeleteBtn, DeleteBtn: props.Todos })} />
        </div>
      ) : null}
    </>
  );
};

export default TodoHandler;
