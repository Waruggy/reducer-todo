import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/Reducer";

const Todo = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  console.log(state);
  return (
    <div>
      <div className="Container">
        <h1>REDUCER TODO</h1>

        {state.map(state => {
          return (
            <div
              onClick={() => {
                dispatch({ type: "Toggle", payload: state.id });
              }}
            >
              {state.item + ", "}
            </div>
          );
        })}


        <input
          className="Input"
          type="text"
          name="newTitle"
          value={newTitleText}
          onChange={handleChanges}
        />

        <button
          className="BtnAddItem"
          onClick={() => {
            dispatch({ type: "AddTodo", payload: newTitleText });
          }}
        >
          Add Item
        </button>

        <button
          className="BtnAddItem"
          onClick={() => {
            dispatch({ type: "ClearTodo", payload: newTitleText });
          }}
        >
          Clear Item
        </button>
      </div>
    </div>
  );
};

export default Todo;