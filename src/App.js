import React, {useState} from "react";
import { Route } from "react-router-dom";

import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList"

import "./App.scss";

import {saveLocalStorage,loadLocalStorage} from "./utils/localStorageHelper";


function App() {

  const [prevTodos, setPrevTodos] = useState(loadLocalStorage());
  const [createValue, setCreateValue] = useState("");

  const active = prevTodos.filter((todos)=>todos.status === false);
  const completed = prevTodos.filter((todos)=>todos.status === true);

  const [numTodo, setNumTodo] = useState(active.length);

  const handleChangeInput = (event) => {
      setCreateValue(event.target.value);
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      prevTodos.push({title:createValue, status:false})
      saveLocalStorage(prevTodos);
      setPrevTodos(loadLocalStorage);
  }

  const handleChangeStatus = (title, status) => {
    // Find todo
    const changedTodo = prevTodos.find((todo) => todo.title === title);
    changedTodo.status = status;
    // Get all todo less new todo + add the new todo
    const newList = prevTodos.filter((todos) => todos.title !== title);
    newList.push(changedTodo);
    saveLocalStorage(prevTodos);
    setPrevTodos(loadLocalStorage);
    setNumTodo(prevTodos.filter((todos)=>todos.status === false).length);
  }
  
  const handleRemove = (title) => {
    const newList = prevTodos.filter((todos)=>todos.title !==title);
    saveLocalStorage(newList);
    setPrevTodos(loadLocalStorage);
    setNumTodo(prevTodos.filter((todos)=>todos.status === false).length);
  }

  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-10">
          <h1>T O D O</h1>
        </div>
        <div>Dark Mode</div>
      </section>

      <CreateTodo handleSubmit={handleSubmit} handleChangeInput={handleChangeInput}/>

      <Route path="/" exact>
        <TodoList prevTodos={prevTodos} handleChangeStatus={handleChangeStatus} handleRemove={handleRemove}  />
      </Route>

      <Route path="/active" exact>
        <TodoList prevTodos={active} handleChangeStatus={handleChangeStatus} handleRemove={handleRemove} />
      </Route>

      <Route path="/completed" exact>
        <TodoList prevTodos={completed} handleChangeStatus={handleChangeStatus} handleRemove={handleRemove} />
      </Route>

      <footer>
        <h3>{numTodo}</h3>
        <a href="./">All</a>
        <a href="./active">Active</a>
        <a href="./completed">Completed</a>
        <button type="button">Clear Completed</button>
      </footer>
    </main>
  );
}

export default App;
