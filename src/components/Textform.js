import React,{useState} from 'react'

const Textform = (props) => {

    const handleupclick =()=>{          // to convert uppercasecase
        // console.log('UperCase Clicked' + text)
        let newText = text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", 'success')
    }

    const handleLoclick =()=>{   // to convert lowercase
      // console.log('UperCase Clicked' + text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase", 'success')
  }

    const handleoneChange =(event)=>{
        console.log('onchange')
        setText(event.target.value)
    }

    const handleClearText=()=>{                     //clear clipboard
      let newText=''
      setText(newText)
      props.showAlert("Clear clipboard", 'warning')
    }
    const handleCopy = ()=>{     // to copied text
      var text = document.getElementById("my-box")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copied Text!",'success')
    }

    const handleExtraSpaces =()=>{  // to removes extra spaces 
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces", 'success')
    }
    const [text, setText] = useState('');
    // const [first, setfirst] = useState(second)
  return (
    <> 
    <div className="container" style= {{color: props.mode==='dark' ? 'white' : 'dark'}} >
    <h1>{props.heading}</h1>
    <div className="form-group">
    {/* <label htmlFor="my-box">Example textarea</label> */}
    <textarea className="form-control" placeholder='Enter Text Here' value={text} 
    onChange={handleoneChange} 
    style= {{backgroundColor: props.mode==='light' ? 'dark' : 'light', color: props.mode==='black' ? 'white' : 'black' }}
     id="my-box" rows="10" > </textarea>
  </div>
  <button className="btn btn-primary my-3 " onClick={handleupclick}>Convert uppercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleLoclick}>Convert Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button className="btn btn-primary my-3 " onClick={handleClearText}>Clear Text</button>

  </div>

  <div className="container my-2" style= {{color: props.mode==='dark' ? 'white' : 'black'}} >
    <h1>Your text Summary</h1>
    <p>{text.split(' ').length} words & {text.length} characters</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter SomeThing in the TextBox above" }</p>

  </div>
    </>
  )
}

export default Textform
