import { useReducer, useRef } from "react";

import reducer, { initState } from "./reducer";
import { addJob, setJob, deleteJob } from "./actions";
import logger from "./logger";
//4. dispatch

function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;
  const h1ref = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    h1ref.current.focus();
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>ToDo</h1>
      <input
        onChange={(e) => dispatch(setJob(e.target.value))}
        value={job}
        ref={h1ref}
        placeholder="add job"
      ></input>
      <button onClick={handleSubmit}>add</button>
      <div style={{ margin: 20 }}>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}> &times;</span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todo;
