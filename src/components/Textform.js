import React,{useState} from 'react'

const Textform = (props) => {

    const handleupclick =()=>{
        // console.log('UperCase Clicked' + text)
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }

    const handleLoclick =()=>{
      // console.log('UperCase Clicked' + text)
      let newText = text.toLowerCase();
      setText(newText)
  }

    const handleoneChange =(event)=>{
        console.log('onchange')
        setText(event.target.value)
    }

    const handleCopy = ()=>{
      var text = document.getElementById("my-box")
      text.select()
      navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces =()=>{
      let newText =text.split(/[ ]+/)
      setText(newText.join(" "))
    }
    const [text, setText] = useState('');
  return (
    <> 
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="form-group">
    <label htmlFor="my-box">Example textarea</label>
    <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleoneChange} id="my-box" rows="10"></textarea>
  </div>
  <button className="btn btn-primary my-3 " onClick={handleupclick}>Convert uppercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleLoclick}>Convert Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

  </div>

  <div className="container my-2">
    <h1>Your text Summary</h1>
    <p>{text.split(' ').length} words & {text.length} characters</p>

    <h2>Preview</h2>
    <p>{text}</p>

  </div>
    </>
  )
}

export default Textform
