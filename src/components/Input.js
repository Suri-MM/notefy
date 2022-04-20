import React, { useState } from 'react';
import logo from '../assests/icons8-add-50.png';

function Input(props) {
    let dt = new Date();
    dt = dt.toISOString().slice(0, dt.length - 1);
    const [ inputName, setInputName ] = useState("");
    const [ inputDescription, setInputDescription ] = useState("");
    const [ inputStatus, setInputStatus ] = useState(false);
    const [ inputRemainder, setInputRemainder ] = useState({
        isRemainder: false, 
        date: dt
    });

    function handleNameChange(event) {
        const name = event.target.value;
        setInputName(name);
    }

    function handleDescriptionChange(event) {
        const desc = event.target.value;
        setInputDescription(desc);
    }

    function handleRemainderChange(event) {
        const remDate = event.target.value;
        setInputRemainder({
            isRemainder: true,
            date: remDate
        });
    }

    function clearInput() {
        dt = new Date();
        dt = dt.toISOString().slice(0, dt.length - 1);
        setInputName("");
        setInputDescription("");
        setInputStatus(false);
        setInputRemainder({
            isRemainder: false, 
            date: dt
        });
    }

    return <div className = 'input'>
        <div className='inputBox'>
            <input className = 'nameBox' type = "text" placeholder='Enter Task Name' onChange = { handleNameChange } value = { inputName } />
            <input className = 'descBox' type = "text" placeholder='Enter Task Description' onChange = { handleDescriptionChange } value = { inputDescription } />
            <input className = 'date' type = "datetime-local" onChange = { handleRemainderChange } value = { inputRemainder.date } />
        </div>
        <img src = { logo } className = 'addButton' onClick = { () => {
                clearInput();
                props.addItem(inputName, inputDescription, inputRemainder);
        }} /> 
    </div>
}

export default Input;