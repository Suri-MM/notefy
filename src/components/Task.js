import React, { useState } from "react";

function Task(props) {
    const [ isChecked, setIsChecked ] = useState(props.status);
    const baseServerURI = "https://notefy-server.herokuapp.com"

    function handleOnClick() {
        setIsChecked(!isChecked);
        fetch(baseServerURI + '/tasks/' + props.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                status: !isChecked
            })
        })
        .then(res => res.json())
        .catch(err => console.log("Error", err));
    }

    return <div className = 'task' onClick={ handleOnClick } onDoubleClick = { () => props.onDoubleClick(props.id) }>
        <p style = { isChecked ? { textDecoration: "line-through"} : null }>{ props.name }</p>
        <p style = { isChecked ? { textDecoration: "line-through"} : null }>{ props.desc }</p>
    </div>
}

export default Task;