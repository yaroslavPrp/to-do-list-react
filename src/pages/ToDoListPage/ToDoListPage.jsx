import React, { useState } from "react";
import ToDoList from "../../containers/ToDoList/ToDoList";
import style from "./toDoListPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/actions";

const ToDoListPage = () => {
  const [toDoInputValue, setToDoInputValue] = useState("");
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState("active");

  const handleChange = (e) => {
    setToDoInputValue(e.target.value);
  };

  const handleToDoSubmit = (e) => {
    e.preventDefault();

    if (toDoInputValue.trim() !== "") {
      const newTodo = {
        todo: toDoInputValue,
        completed: false,
        id: Date.now(),
      };

      dispatch(updateUser({ ...user, toDoList: [...user.toDoList, newTodo] }));
      setToDoInputValue("");

      setSelectedStatus("active");
    }
  };

  return (
    <div className={style.container}>
      {user.name ? (
        <div className={style.content}>
          <form className={style.form} onSubmit={handleToDoSubmit}>
            <label htmlFor="todoInput" className={style.label}>
              New Todo
            </label>
            <div className={style.action}>
              <input
                id="todoInput"
                className={style.input}
                type="text"
                value={toDoInputValue}
                onChange={handleChange}
                placeholder="type in new todo item"
              />
              <button
                className={style.button}
                onClick={handleToDoSubmit}
                type="submit"
              >
                Add Todo
              </button>
            </div>
          </form>
          <ToDoList
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        </div>
      ) : (
        <div className={style.goRegisterBlock}>
          You are not registered, please go{" "}
          <Link to={"/registration"}>register</Link> first.
        </div>
      )}
    </div>
  );
};

export default ToDoListPage;
