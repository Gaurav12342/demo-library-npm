import React, { useState } from "react";
import styles from "./styles.module.css";
import TextArea from "../src/components/TextArea";
// import SimpleButton from "./components/SimpleButton";
// import Button from "rc-button";
// import App from '../src/App';

// ReactDOM.render(<App />, document.getElementById('root'))

// const ExampleComponent = (props) => {
//   return <div className={styles.test}>Example Component: {props.text}</div>;
// };

export const ExampleComponent = (props) => {
  const [value, setValue] = useState("");
  console.log("value", value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <TextArea
        name="value"
        value={value}
        style={{ color: "red" }}
        placeholder="Description"
        onChange={handleChange}
        onPressEnter={handleChange}
        disabled={false}
      />

      {/* <Button>Submit</Button> */}
    </div>
  );
};

export default ExampleComponent;
