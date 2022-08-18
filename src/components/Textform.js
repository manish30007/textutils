import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function Textform(props) {
    const[text,setText]=useState(''); //hook
    const handleupclick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
    props.showAlert("converted to uppercase","success");

    }
    const handleloclick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
    props.showAlert("converted to lowercase","success");
    }
    const handleCclick =()=>{
        let newText="";
        setText(newText);
    
    props.showAlert("text removed","success");
    }
    const handleupchange=(event)=>{
       setText(event.target.value);
    }
    const handleCopy=()=>{
      var ctext=document.getElementById("myBox");
            ctext.select();
      navigator.clipboard.writeText(ctext.value);
      props.showAlert("text copied","success");
    }
    const handleExtraSpace=()=>{
      let ntext=text.split(/[ ]+/);
      setText(ntext.join(" "));
      props.showAlert("extra space removed","success");
    }
  return (<>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'#2d5477':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleupchange}
        rows="8" ></textarea>
      </div>
 
        <button className="btn btn-primary mx-1" onClick={handleupclick} >convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloclick} >convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCclick} >clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace} >Remove Extra space</button>
      </div>
      <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}} >
        <h3>your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>requires {0.008*text.split(" ").length} minutes to reads</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </>
  );
}
