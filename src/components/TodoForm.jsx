import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input) {
            addTodo(input);
            setInput('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new to-do"
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;