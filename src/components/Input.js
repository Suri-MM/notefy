import React, { useState } from 'react';
import logo from '../assests/icons8-add-50.png';

function Input(props) {
    const [ inputName, setInputName ] = useState("");
    const [ inputDescription, setInputDescription ] = useState("");
    const [ inputStatus, setInputStatus ] = useState(false);
    const [ inputRemainder, setInputRemainder ] = useState({
        isRemainder: false, 
        date: null
    });

    function handleNameChange(event) {
        const name = event.target.value;
        setInputName(name);
    }

    function handleDescriptionChange(event) {
        const desc = event.target.value;
        setInputDescription(desc);
    }


    function clearInput() {
        setInputName("");
        setInputDescription("");
        setInputStatus(false);
        setInputRemainder({
            isRemainder: false, 
            date: null
        });
    }

    return <div className = 'input'>
        <div className='inputBox'>
            <input className = 'nameBox' type = "text" placeholder='Enter Task Name' onChange = { handleNameChange } value = { inputName }/>
            <input className = 'descBox' type = "text" placeholder='Enter Task Description' onChange = { handleDescriptionChange } value = { inputDescription }/>
        </div>
        <img src = { logo } className = 'addButton' onClick = { () => {
                clearInput();
                props.addItem(inputName, inputDescription);
        }} /> 
    </div>
}

export default Input;