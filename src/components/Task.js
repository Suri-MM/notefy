import React, { useState } from "react";

function Task(props) {
    const [ isChecked, setIsChecked ] = useState(props.status);

    function handleOnClick() {
        setIsChecked(!isChecked);
        fetch('http://localhost:3000/tasks/' + props.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                _id: props.id,
                name: props.name,
                status: !isChecked
            })
        })
        .then(res => res.json())
        .catch(err => console.log("Error", err));
    }

    return <div className = 'task' onClick={ handleOnClick } onDoubleClick = { () => props.onDoubleClick(props.id) }>
        <p style = { isChecked ? { textDecoration: "line-through"} : null }>{ props.name }</p>
    </div>
}

export default Task;