function logger(reducer) {
  return (preState, action) => {
    console.group(action.type);
    console.log("pre State: ", preState);
    const newState = reducer(preState, action);
    console.log("new State:", newState);
    console.groupEnd();
    return newState;
  };
}

export default logger;
