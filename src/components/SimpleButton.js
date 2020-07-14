import React from "react";
import Button from "rc-button";

const SimpleButton = (props) => {
  return (
    <>
      <Button>{props.text}</Button>
    </>
  );
};

export default SimpleButton;
