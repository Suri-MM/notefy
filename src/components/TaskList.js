import React from 'react';
import Task from './Task';

function TaskList(props) {
    const tasks = props.tasks;

    return <div className = 'taskList'>
        { tasks.map((task) => {
            return <Task key = { task._id } id = { task._id } name = { task.name } desc = { task.description } status = { task.status } onDoubleClick = { () => props.onDoubleClick(task._id) } />;
        })}
    </div>
}

export default TaskList;