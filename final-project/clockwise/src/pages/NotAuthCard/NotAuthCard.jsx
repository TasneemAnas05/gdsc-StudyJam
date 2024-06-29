import { useState } from "react"
import "./NotAuthCard.css"

const NotAuthCard = ({handleNewName})=>{
   
    const [inputValue , setInputValue]=useState("");
    
    const handleClick=()=>{
       
        inputValue.length > 0 && handleNewName(inputValue);
    };
  return (
    <div className="container">
       <div className="intro-section">
        <h1>Hi There!</h1>
        <p>Tell us about yourself</p>
       </div>
       <div className="form-section">
        <input
          className="txt-input"
          type="text"
          value={inputValue}
          required // must be entered
          onChange ={(e)=>setInputValue(e.target.value)}
           />
        <button className="btn-lg" onClick={handleClick}>Continue</button>
       </div>
    </div>
  )
}
export default NotAuthCard;