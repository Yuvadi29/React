import React, { useState } from 'react'

//Here we add a State which shows the local information of a component like if something is written in the text box it will be the state of our object for that specific point of time. It is changeable. So whenever the object changes, componnent re-renders itself
export default function Textform(props) {

    //This function is going to convert the given text to Uppercase, so for timebeing we set the text as to uppercase button is clicked

    const ToUpperCase = () => {
        // console.log('Button is Clicked');
        let uptext = text.toUpperCase();
        setText(uptext);
        props.showAlert("Converted to UpperCase", "success");
    }

    const ToLowerCase = () => {
        // console.log('Button is Clicked');
        let lowtext = text.toLowerCase();
        setText(lowtext);
        props.showAlert("Converted to LowerCase", "success");

    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value); //Isse it will clear the value which is present in variable text

    }

    const [text, setText] = useState('');

    {/*What this will do is, text naam ka variable hai, so jo text useState() ke andar hai that will be stored in text. And if we wish to change the value of the text, we will do it by setText(). 
    text = "new Text" is Wrong
    setText("new Text") is Correct  */}

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'purple'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/*Whenever the text is changed, it will be updated in the value part in text area*/}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                     color: props.mode === 'dark'?'white':'purple'
                }} id="myText" rows="8"></textarea>
            </div>
            <button disabled={text.length===0}className="btn btn-primary" onClick={ToUpperCase}>To UpperCase</button>
            <br />
            <br />
            <button disabled={text.length===0}className="btn btn-primary" onClick={ToLowerCase}>To LowerCase</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'purple'}}>
            <h1>Summary of the Input</h1>
            <p>It has {text.length} characters and {text.split(/\s+\).filter((element)=>{ return element.length!==0}).length} words</p> {/*split is a function which will split the text into words and will return the number of words and text.length will show us the length i.e no of characters in the text*/}
            <p>Time taken to read the text = {0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes</p>
            <h3>Preview:</h3>
            <p>{text.length>0?text:"Enter Something to Preview"}</p>
        </div>
        </>
    )
}
