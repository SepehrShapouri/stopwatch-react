import { forwardRef } from "react";
const MyInput = forwardRef(function MyInput(props, ref) {
  const {lable, ...otherProps} = props;
  return (
    <lable>
      {lable}
      <input ref={ref} {...otherProps} />
    </lable>
  );
});

export default MyInput;
