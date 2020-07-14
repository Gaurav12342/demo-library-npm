import React, { useState } from 'react';
import Textarea from 'rc-textarea';

const TextArea = props => {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Textarea, {
    prefixCls: props.prefixCls,
    className: props.className,
    style: props.style,
    placeholder: props.placeholder,
    autoSize: Boolean | Object,
    name: props.name,
    value: value,
    onChange: handleChange,
    onPressEnter: handleChange,
    disabled: props.disabled
  }));
};

const ExampleComponent = props => {
  const [value, setValue] = useState("");
  console.log("value", value);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextArea, {
    name: "value",
    value: value,
    style: {
      color: "red"
    },
    placeholder: "Description",
    onChange: handleChange,
    onPressEnter: handleChange,
    disabled: false
  }));
};

export default ExampleComponent;
export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
