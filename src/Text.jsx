import { forwardRef } from "react";
 const Text = forwardRef(function Text(props,ref){
    const {text} = props;
    return (
        <>
        <p ref={ref}>{text}</p>
        </>
    )
 })
export default Text;