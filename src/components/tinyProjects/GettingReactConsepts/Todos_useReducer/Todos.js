// TODO create Todo App with functionality of [submit, delete, markComplete, add into Json]
// TODO Create with the help of useReducer

import React, { useReducer, useState } from "react";
import "./css/Todo.css";

import TodoHandler from "./TodoHandler";
import TodosStore from "./TodoList.json";

export const ACTIONS = {
  completeBtn: "completeButton",
  DeleteBtn: "deleteButton",
  submitBtn: "submitButton",
  storeTodo: "Convet Into Json file",
  getTodo: "Get Todo From Json File",
};

const initialState = { content: "", TodoList: [""] };

const Todos = () => {
  const [NewTodo, setNewTodo] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.submitBtn:
        setNewTodo("");

        const NewTodoArray = [...state.TodoList, action.payload.content];
        const TodoUpdated = NewTodoArray.filter((item, pos) => NewTodoArray.indexOf(item) === pos);
        return { TodoList: [...TodoUpdated] };

      case ACTIONS.DeleteBtn:
        const newTodoList = state.TodoList.slice();
        newTodoList.splice(
          newTodoList.findIndex((e) => e === action.deleteTodo),
          1
        );
        return { TodoList: [...newTodoList] };

      case ACTIONS.getTodo:
        setNewTodo("");

        const updatedTodoArray = [...state.TodoList, action.payload.content, ...TodosStore.map((e) => e.Todo)];
        const uniqueArray = updatedTodoArray.filter((item, pos) => updatedTodoArray.indexOf(item) === pos);

        return { TodoList: [...uniqueArray] };

      case ACTIONS.storeTodo:
        const StoreJsonArr = [];
        action.TodoList.forEach((e) => StoreJsonArr.push(JSON.stringify({ Todo: e })));
        return { TodoList: [...action.TodoList], jsonFormat: StoreJsonArr };

      default:
        return " ";
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.submitBtn, payload: { content: NewTodo } });
  };

  const TodoList = state.TodoList.filter((e) => e);

  return (
    <>
      <div className="todo__header--JsonBtn">
        <input type="button" value="get Stored Todo" onClick={(e) => dispatch({ type: ACTIONS.getTodo, payload: { content: NewTodo } })} />
        <input type="button" value="get Into Json" onClick={(e) => dispatch({ type: ACTIONS.storeTodo, TodoList: TodoList })} />

        <form onSubmit={handleSubmit}>
          <input type="text" value={NewTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <input type="submit" value="Submit Button" />
        </form>
      </div>
      <p style={{ textAlign: "center", fontWeight: "bolder", marginBottom: "3em", textTransform: "uppercase" }}>Your Todos</p>

      <div className="todo__body--Result">
        {TodoList.map((e, ind) => (
          <TodoHandler key={ind} Todos={e} payload={(el) => dispatch({ type: el.type, deleteTodo: el.DeleteBtn })} />
        ))}
      </div>

      <p>{state.jsonFormat}</p>
    </>
  );
};
export default Todos;
