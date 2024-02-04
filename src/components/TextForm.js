import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper case button click" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleClearClick = () => {
        // console.log("Upper case button click" + text);
        let newText = "";
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("Upper case button click" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter your text here");
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px'
    })

    const toggleStyle = () => {
        if (myStyle.color === "white") {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        } else {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                borderRadius: '10px'
            })
            setBtnText("Enable Light Mode");
        }
    }

    return (
        <>
            <div className="container" style={myStyle}>


                <div>
                    <div className='my-3'>

                        <h2>{props.heading} <button onClick={toggleStyle} className='btn btn-primary my-2' style={{ float: 'right' }} >{btnText}</button></h2>

                    </div>
                    <div className="mb-3" >
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="10" style={myStyle}></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

                </div>
                <div className="container my-3">
                    <h1>Your Text Summary</h1>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <h4>Time taken to read words</h4>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes</p>
                </div>
            </div>
        </>
    )
}
