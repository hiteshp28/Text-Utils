import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick=()=>{
      let newText=text1.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase", "success");
  }
  const handleLoClick=()=>{
      let newText=text1.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text1);
    props.showAlert("Text Copied", "success");
  }
  const handleOnChange=(event)=>{
      setText(event.target.value);
  }

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  const [text1,setText]=useState("");
  // setText("Enter the number here ");//correct way to change text
  return (
      <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h4>{props.heading}</h4>
            <div className="mb-3">
            <textarea className="form-control" value={text1} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#042743' ,color:props.mode==='dark'?'white':'#042743'}} id="Mybox" rows="10"></textarea>
            </div>
            <button disabled={text1.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text1.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button disabled={text1.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text1.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-4 " style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h4>Your Text Summary </h4>
            <p>Your text field Contains : {text1.split(/\s+/).filter((element)=>{return element.length!==0}).length}-words and {text1.length}-characters</p>
            <p>It will take {0.008 * text1.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read it </p>
            <h2>Preview</h2>
            <p>{text1.length>0?text1:"Nothing to preview!"}</p>
        </div>
      </>
  )
}

