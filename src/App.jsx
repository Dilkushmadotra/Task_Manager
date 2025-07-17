import React, { useState, useEffect } from 'react';
import Header from './components/header';
import TaskForm from './components/taskform';
import TaskList from './components/tasklist';
import Footer from './components/footer';
import './App.css';

function App() {
    const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    const updateTask = (id, updatedText) =>
        setTasks(tasks.map(task => task.id === id ? { ...task, text: updatedText } : task));
    const toggleComplete = (id) =>
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

    return (
        <>
            <Header />

            <div className="container py-3 d-flex justify-content-center">
                <div className="task-app card shadow p-4 rounded-4 w-100" style={{ maxWidth: '500px', backgroundColor: '#ffffff' }}>
                    <h2 className="text-center fw-bold mb-4" style={{ color: '#333' }}>📝 Task Manager</h2>
                    <TaskForm addTask={addTask} />
                    <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} updateTask={updateTask} />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default App;
