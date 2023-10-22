import { useRef } from "react";
import MyInput from "./MyInput";
const App = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <form className="form">
      <MyInput lable="Enter Your Name:" ref={ref} />
      <button type="button" onClick={handleClick}>Edit</button>
    </form>
  );
};

export default App;
