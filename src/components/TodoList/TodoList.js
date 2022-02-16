import React from 'react';

import TodoCard from "../TodoCard";

export default function TodoList({
    prevTodos,
    handleChangeStatus,
    handleRemove
 }){
return (
        <section className="todoList__container">
        {prevTodos.map( (todos) => (
            <TodoCard key={todos.title} title={todos.title} handleChangeStatus={handleChangeStatus} handleRemove={handleRemove}/>
        )
        )}
        </section>
)
}