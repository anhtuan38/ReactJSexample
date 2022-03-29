import { useStore, actions } from "./store";
import "./App.css";
import { useRef } from "react";

function App() {
  const inputRef = useRef();
  const [state, dispatch] = useStore();
  const { todoInput, todo } = state;
  console.log(todoInput);
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>Hello World</h1>
      <input
        value={state.todoInput}
        ref={inputRef}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      ></input>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
