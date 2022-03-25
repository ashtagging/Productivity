import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";
import "../styles/menu.css";

function Menu() {
  let navigate = useNavigate();

  return (
    <div className="app-button menu">
      <button
        className="calculator-button"
        onClick={() => {
          navigate("/calculator");
        }}
      >
        <i className="fa-solid fa-calculator"></i>Calculator
      </button>
      <button
        onClick={() => {
          navigate("/timer");
        }}
      >
        <i className="fa-regular fa-hourglass"></i>Timer
      </button>
      <button
        onClick={() => {
          navigate("/todolist");
        }}
        className="todolist-button"
      >
        <i className="fa-solid fa-list-check"></i>
        To Do List
      </button>
    </div>
  );
}

export default Menu;
