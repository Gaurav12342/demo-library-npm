import React, { useState } from "react";
import Textarea from "rc-textarea";

const TextArea = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    // console.log("value", value);
  };
  return (
    <div>
      <Textarea
        prefixCls={props.prefixCls}
        className={props.className}
        style={props.style}
        placeholder={props.placeholder}
        autoSize={Boolean | Object}
        name={props.name}
        value={value}
        onChange={handleChange}
        onPressEnter={handleChange}
        disabled={props.disabled}
      />
    </div>
  );
};

export default TextArea;
