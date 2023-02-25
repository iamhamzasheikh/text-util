import React,{useState} from 'react'


const Textform = (props) => {

    const handleupclick =()=>{
        // console.log('UperCase Clicked' + text)
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }
    const handleoneChange =(event)=>{
        console.log('onchange')
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
    <>

    <h1>{props.heading}</h1>
    <div className="form-group">
    <label htmlFor="my-box">Example textarea</label>
    <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleoneChange} id="my-box" rows="10"></textarea>
  </div>

  <button className="btn btn-primary my-3" onClick={handleupclick}>Convert uppercase</button>

    
    
    </>
  )
}

export default Textform
