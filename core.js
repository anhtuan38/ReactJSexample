export default function html([first, ...strings], ...values) {
  return values
    .reducer((acc, cur) => acc.concat(cur, strings.shift()), [first])
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
}

export function createStore(reducer) {
  let state = reducer();
  const roots = new Map();

  function render() {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }
  return {
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    connect(selector = (state) => state) {
      return (component) => {
        // Trả về lần 1
        return (props, ...args) => {
          // Trả về lần 2
          return component(Object.assign({}, props, selector(state), ...args)); // Trả về lần 3
        };
      };
    },
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
}
