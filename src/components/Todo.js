import React from "react";

const ToDo = ({ todo, handleToggle }) => {

  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <>
      <ul className="boxes">
        <input type="checkbox" />
        <label for="listings" className="listings"> 
        <div
            id={todo.id}
            key={todo.id + todo.task}
            name="todo"
            value={todo.id}
            onClick={handleClick}
            className={todo.complete ? "todo strike" : "todo"}
          >
            {todo.task}
          </div> 
        </label><br/>  
      </ul>
    </>
  );
};

export default ToDo;

{/* <input
id={todo.id}
key={todo.id + todo.task}
name="todo"
value={todo.id}
onClick={handleClick}
className={todo.complete ? "todo strike" : "todo"}
placeholder= {todo.task}
onChange= /> */}

