import React, { useState } from 'react';
import logo from '../assests/icons8-add-50.png';

function Input(props) {
    const [ inputValue, setInputValue ] = useState(" ");

    function handleChange(event) {
        const input = event.target.value;
        setInputValue(input);
    }

    function clearInput() {
        setInputValue("");
    }

    return <div className = 'input'>
        <input className = 'inputBox' type = "text" onChange = { handleChange } value = { inputValue }/>
        <img src = { logo } className = 'addButton' onClick = { () => {
            clearInput();
            props.addItem(inputValue);
        }} /> 
    </div>
}

export default Input;