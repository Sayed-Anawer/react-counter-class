import React from "react";

const Greet = (props) => {
  return (
    <h1>
      {" "}
      Hello {props.name}, Your age is {props.age}
    </h1>
  );
};

export default Greet;
