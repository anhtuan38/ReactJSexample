import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);

  return (
    <p style={{ marginTop: 40 }} className={context.theme}>
      In a typical React application, data is passed top-down (parent to child)
      via props, but such usage can be cumbersome for certain types of props
      (e.g. locale preference, UI theme) that are required by many components
      within an application. Context provides a way to share values like these
      between components without having to explicitly pass a prop through every
      level of the tree.
    </p>
  );
}
export default Paragraph;
