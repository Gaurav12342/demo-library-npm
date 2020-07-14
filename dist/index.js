function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Textarea = _interopDefault(require('rc-textarea'));

var TextArea = function TextArea(props) {
  var _useState = React.useState(""),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Textarea, {
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

var ExampleComponent = function ExampleComponent(props) {
  var _useState = React.useState(""),
      value = _useState[0],
      setValue = _useState[1];

  console.log("value", value);

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(TextArea, {
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

exports.ExampleComponent = ExampleComponent;
exports.default = ExampleComponent;
//# sourceMappingURL=index.js.map
