import React, { useState } from "react";

const UseStateHook = ({ nameProp }) => {
  const [name, setName] = useState(nameProp);
  const [details, SetDetails] = useState({
    email: "",
    phone: ""
  });
  const handleNameChange = e => {
    setName(e.target.value);
    console.log(name);
  };
  const handleDetailChange = e => {
    SetDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details);
  };
  return (
    <React.Fragment>
      <div className="form-group">
        <input
          className="form-control"
          name="name"
          placeholder="Name...."
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="email"
          placeholder="email"
          onChange={handleDetailChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="phone"
          placeholder="phone"
          onChange={handleDetailChange}
        />
      </div>
      <h4>You have entered: {name}</h4>
    </React.Fragment>
  );
};

export default UseStateHook;
