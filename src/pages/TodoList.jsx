import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "../styles/todolist.css";

function TodoList({ todo }) {
  const [todoItem, setToDoItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const handleChange = (event) => {
    setToDoItem(event.target.value);
  };

  const handleSubmit = (event) => {
    //Below stops the page from refreshing when the form is submitted
    event.preventDefault();
    setTodos([...todos, { id: uniqid(), text: todoItem, completed: false }]);
    setToDoItem("");
  };

    //Save to Local Storage
    const saveTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
  
    const getTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal)
      }
    };

  const updateTodo = (event) => {
    console.log("updated");
    // setToDos(todos.map(item => item.id === todo.id ? {...item, text: "hello Ashley"} : item))
    setEditMode(!editMode);
    event.preventDefault();
  };

  function TodoItem({ text, id, todo, completed }) {
    const deleteTodo = () => {
      const newArray = todos.filter((el) => el.id !== todo.id);
      setTodos(newArray);
    };

    const completeTodo = () => {
      setTodos(
        todos.map((item) =>
          item.id === todo.id ? { ...item, completed: !item.completed } : item
        )
      );
    };

    const editTodo = () => {
      setEditMode(!editMode);
    };

    return !editMode ? (
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={completeTodo} className="complete">
          <i className="fa-solid fa-check"></i>
        </button>
        <button onClick={editTodo} className="edit">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={deleteTodo} className="delete">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    ) : (
      <div>
        {/* <h1>Update To do</h1>
        <form>
          <input
            type="text"
            placeholder="Please enter a to do item"
            value={todoItem}
            onChange={handleChange}
            className="todo-input"
          />
          <button className="todo-add" onClick={updateTodo}>
            Update<i className="fa-solid fa-circle-plus"></i>
          </button>
        </form> */}
      </div>
    );
  }

  return !editMode ? (
    <div className="list-containter">
      <h1>To Do List</h1>
      <form>
        <input
          type="text"
          placeholder="Please enter a to do item"
          value={todoItem}
          onChange={handleChange}
          className="todo-input"
        />
        <button className="todo-add" onClick={handleSubmit}>
          Add to Do<i className="fa-solid fa-circle-plus"></i>
        </button>
      </form>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              text={todo.text}
              todo={todo}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
            />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="list-containter">
      <h1>Update To do</h1>
      <form>
        <input
          type="text"
          placeholder="Please enter a to do item"
          value={todoItem}
          onChange={handleChange}
          className="todo-input"
        />
        <button className="todo-add" onClick={updateTodo}>
          Update<i className="fa-solid fa-circle-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default TodoList;
