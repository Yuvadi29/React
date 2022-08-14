import React, { useState } from 'react'

//Here we add a State which shows the local information of a component like if something is written in the text box it will be the state of our object for that specific point of time. It is changeable. So whenever the object changes, componnent re-renders itself
export default function Textform(props) {

    //This function is going to convert the given text to Uppercase, so for timebeing we set the text as to uppercase button is clicked

    const ToUpperCase = () => {
        // console.log('Button is Clicked');
        let uptext = text.toUpperCase();
        setText(uptext);
    }

    const ToLowerCase = () => {
        // console.log('Button is Clicked');
        let lowtext = text.toLowerCase();
        setText(lowtext);
    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value); //Isse it will clear the value which is present in variable text

    }

    const [text, setText] = useState('Enter Text Here');

    {/*What this will do is, text naam ka variable hai, so jo text useState() ke andar hai that will be stored in text. And if we wish to change the value of the text, we will do it by setText(). 
    text = "new Text" is Wrong
    setText("new Text") is Correct  */}

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/*Whenever the text is changed, it will be updated in the value part in text area*/}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={ToUpperCase}>To UpperCase</button>
            <br />
            <br />
            <button className="btn btn-primary" onClick={ToLowerCase}>To LowerCase</button>
        </div>
    )
}
