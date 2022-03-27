import { useReducer, useRef } from "react";
// 1. initial state
const initState = {
  job: "",
  jobs: [],
};

// 2. Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
// 3. Reducer
const reducer = (state, action) => {
  console.log("prev state", state);
  console.log("action", action);
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = { ...state, job: action.payload };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJob = [...state.jobs];
      newJob.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJob,
      };
      break;
    default:
      throw new Error("Invalid action");
  }
  console.log("newState", newState);
  return newState;
};
//4. dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
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

export default App;
