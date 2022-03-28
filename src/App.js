import { ThemeContext } from "./ThemeContext";
import Content from "./Content";
import { useContext } from "react";
import "./App.css";

function App() {
  const context = useContext(ThemeContext);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ context", context);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Content />
    </div>
  );
}

export default App;
