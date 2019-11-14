import React, { useRef } from "react";

const UseRefHook = () => {
  const inputElem = useRef(null);
  const handleClick = () => {
    inputElem.current.focus();
  };
  return (
    <React.Fragment>
      <div className="form-group">
        <input
          className="form-control"
          name="name"
          placeholder="name"
          ref={inputElem}
        />
        <button className="btn btn-success btn-lg " onClick={handleClick}>
          Click
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseRefHook;
