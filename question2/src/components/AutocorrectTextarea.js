import React, { useState } from "react";

function AutocorrectTextarea() { 
    const [input, setInput] = useState(""); 
    const wordsToCorrect = { 
        realy: "really",
        wierd: "weird" };

    function checkForWordMatch(e) {
        let allWords = e.split(" ");
        let lastTypedWord = allWords[allWords.length - 1];
        let currentTextLength = e.length;
        let wordToReplace = wordsToCorrect[lastTypedWord];
        if (wordsToCorrect[lastTypedWord] !== undefined) {
           e = e.slice(0, currentTextLength - lastTypedWord.length) + wordToReplace;
         }

    setInput(e);

    } 

    return ( 
    <div>
        
            <input type="text" onChange={(event) => checkForWordMatch(event.target.value)} value={input} >
            </input> 
        </div> ); }

export default AutocorrectTextarea;