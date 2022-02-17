import React, {useState} from "react";
import { Route } from "react-router-dom";
import {v4 as uuid} from "uuid";

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
      prevTodos.push({id:uuid(),title:createValue, status:false, isEditing:false})
      saveLocalStorage(prevTodos);
      setPrevTodos(loadLocalStorage);
      setNumTodo(prevTodos.filter((todos)=>todos.status === false).length);
  }

  const handleIsEditing = (id) => {
      const updatedTodo = prevTodos.filter((todo) => todo.id === id)[0];
      const newList = prevTodos.filter((todos) => todos.id !== id);
      console.log(updatedTodo);
      if(updatedTodo.isEditing === false){
        updatedTodo.isEditing = true;
      } else{
        updatedTodo.title = createValue;
        updatedTodo.isEditing = false;
      }
      newList.push(updatedTodo);
      saveLocalStorage(prevTodos);
      setPrevTodos(loadLocalStorage);
  }



  const handleChangeStatus = (id, status) => {
    // Find todo
    const changedTodo = prevTodos.find((todo) => todo.id === id);
    changedTodo.status = status;
    // Get all todo less new todo + add the new todo
    const newList = prevTodos.filter((todos) => todos.id !== id);
    newList.push(changedTodo);
    saveLocalStorage(newList);
    setPrevTodos(loadLocalStorage());
    setNumTodo(prevTodos.filter((todos)=>todos.status === false).length);
  }
  
  const handleRemove = (id) => {
    const newList = prevTodos.filter((todos)=>todos.id !==id);
    saveLocalStorage(newList);
    setPrevTodos(loadLocalStorage());
    setNumTodo(prevTodos.filter((todos)=>todos.status === false).length);
    console.log(prevTodos);
    console.log(loadLocalStorage());
  }

  return (
    <main className="">
      <div className="backgroundImage">
        <div className="backgroundDeg"/>
      </div>
      <div className="content">

      <section className="row">
        <div className="col col-10">
          <h1>T O D O</h1>
        </div>
        <div>Dark Mode</div>
      </section>

      <CreateTodo handleSubmit={handleSubmit} handleChangeInput={handleChangeInput}/>

      <Route path="/" exact>
        <TodoList
        numTodo={numTodo}
        prevTodos={prevTodos}
        handleChangeStatus={handleChangeStatus}
        handleRemove={handleRemove}
        handleChangeInput={handleChangeInput} handleIsEditing={handleIsEditing}
        />
      </Route>

      <Route path="/active" exact>
        <TodoList
        prevTodos={active}
        handleChangeStatus={handleChangeStatus}
        handleRemove={handleRemove}
        handleChangeInput={handleChangeInput}
        handleIsEditing={handleIsEditing}
        />
      </Route>

      <Route path="/completed" exact>
        <TodoList
        prevTodos={completed}
        handleChangeStatus={handleChangeStatus}
        handleRemove={handleRemove}
        handleIsEditing={handleIsEditing}
        handleChangeInput={handleChangeInput}
        />
      </Route>

      </div>
    </main>
  );
}

export default App;
