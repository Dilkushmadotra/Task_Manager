import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTask(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex mb-3">
            <input
                type="text"
                className="form-control me-2"
                placeholder="Enter new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">Add</button>
        </form>
    );
}

export default TaskForm;
