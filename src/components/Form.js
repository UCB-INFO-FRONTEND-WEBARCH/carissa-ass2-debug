import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={userInput}
        type="text"
        style={{color:"black"}}
        onChange={handleChange}
        placeholder="Add task..."
        className= "tags-input"
      />
    </form>
  );
};

export default ToDoForm;
