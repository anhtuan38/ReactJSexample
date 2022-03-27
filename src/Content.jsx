import { useState, useEffect, useRef, memo } from "react";

function Content({ count, onIncrease }) {
  console.log("render Content");
  return (
    <div>
      <h1>hello</h1>
      <button onClick={onIncrease}>click</button>
    </div>
  );
}
export default memo(Content);
