import React from 'react';

import TodoCard from "../TodoCard";

import "./TodoList.scss";

export default function TodoList({
    numTodo,
    prevTodos,
    handleChangeStatus,
    handleRemove,
    handleIsEditing,
    handleChangeInput
}) {
    return (
        <section className="todoList__container">
            <ul className="ul-list">
            {prevTodos.map((todos) => (
                <TodoCard
                key={todos.id}
                id={todos.id}
                title={todos.title}
                status={todos.status}
                handleChangeStatus={handleChangeStatus}
                handleRemove={handleRemove}
                handleIsEditing={handleIsEditing}
                isEditing={todos.isEditing}
                handleChangeInput={handleChangeInput}/>
            )
            )}
            </ul>
            <footer>
                <h3>{numTodo}</h3>
                <a href="./">All</a>
                <a href="./active">Active</a>
                <a href="./completed">Completed</a>
                <button type="button">Clear Completed</button>
            </footer>
        </section>
    )
}