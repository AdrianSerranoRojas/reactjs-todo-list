import React from 'react';

import TodoCard from "../TodoCard";

export default function TodoList({
    prevTodos,
    handleChangeStatus,
    handleRemove,
    handleIsEditing,
    handleChangeInput
}) {
    return (
        <section className="todoList__container">
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
        </section>
    )
}