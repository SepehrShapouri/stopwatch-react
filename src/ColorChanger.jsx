import { useRef } from "react";
import Text from "./Text";
const ColorChanger = () => {
  const ref = useRef(null);
  const handleClick = () => {
    console.log(ref.current);
    ref.current.style.color = "violet";
  };
  return (
    <div className="color">
      <Text ref={ref} text="change my color" />
      <div>
      <button onClick={handleClick}>change</button>
      <button onClick={()=> ref.current.style.color = "black"}>invert</button>
      </div>
    </div>
  );
};

export default ColorChanger;
