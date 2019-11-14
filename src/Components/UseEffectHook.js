import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, SetCount] = useState(0);
  const handleClick = () => {
    SetCount(count + 1);
  };
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <React.Fragment>
      <button className="btn btn-lg btn-success" onClick={handleClick}>
        Click
      </button>
      <h1>IntialCount: {count}</h1>
    </React.Fragment>
  );
};

export default UseEffectHook;
