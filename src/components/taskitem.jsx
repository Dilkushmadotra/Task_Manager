import React, { useState } from 'react';

function TaskItem({ task, toggleComplete, deleteTask, updateTask }) {
    if (!task) return null;   // Safety check

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text || '');

    const handleUpdate = () => {
        updateTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <li className={`d-flex justify-content-between align-items-center p-3 rounded-3 mb-3 shadow-sm ${task.completed ? 'bg-light' : ''}`}
            style={{ backgroundColor: '#f8f9fa', transition: '0.3s' }}>
            {isEditing ? (
                <input
                    className="form-control me-2"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? '#888' : '#333',
                    wordBreak: 'break-word',
                    maxWidth: '250px'
                }}>
                    {task.text}
                </span>
            )}
            <div className="d-flex align-items-center gap-2">
                {isEditing ? (
                    <button className="btn btn-sm btn-success rounded-pill px-3" onClick={handleUpdate}>Save</button>
                ) : (
                    <button className="btn btn-sm btn-warning rounded-pill px-3" onClick={() => setIsEditing(true)}>Edit</button>
                )}
                <button className="btn btn-sm btn-outline-secondary rounded-pill px-3" onClick={() => toggleComplete(task.id)}>
                    {task.completed ? 'Undo' : 'Done'}
                </button>
                <button className="btn btn-sm btn-outline-danger rounded-pill px-3" onClick={() => deleteTask(task.id)}>✕</button>
            </div>
        </li>
    );
}

export default TaskItem;
