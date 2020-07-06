import React from "react";

const Test = (props) => {
  return (
    <React.Fragment>
      <div>Hello world</div>
      <p>{props.test}</p>
    </React.Fragment>
  );
};

export default Test;
