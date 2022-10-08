import React , {useState}from 'react';
export default function Textform(props) {
  const fun =()=>{
     let newText=text.toLocaleUpperCase();
     setText(newText);
     props.showAlert("convert in upperCase","success");
  }
  const fun3 =()=>{
    let newText=text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("convert in lowerCase","success");
 }
 const fun4 =()=>{
  let newText=" ";
  setText(newText);
 props.showAlert("box clear","success");
}
  const change =(event)=>{
    setText(event.target.value);
}
  const [text,setText] = useState('');
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
     <h1  style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={change} id="exampleFormControlTextarea1" style={{color:props.mode==='dark'?'grey':'black'}}  rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={fun}>Convert UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={fun3}>Convert lowerCase</button>
      <button className="btn btn-primary mx-1" onClick={fun4}>Clear</button>
    </div>
     <h1 style={{color:props.mode==='dark'?'white':'black'}}>Your text summary</h1>
     <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(" ").length} words and {text.length} character.  </p>
     </>
  );
}



