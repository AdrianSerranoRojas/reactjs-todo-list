import React from "react";

import "./TodoCard.scss";

export default function TodoCard({ 
    id,
    title,
    status,
    isEditing,
    handleChangeStatus,
    handleRemove,
    handleIsEditing,
    handleChangeInput,
    handleBlur
    }) {


    function handleChangeCheckbox(e) {
        handleChangeStatus(id, e.target.checked);
    }
    function handleRemoveTodo(){
        handleRemove(id)
    }
    function todoIsEditing(e){
        e.preventDefault();
        handleIsEditing(id)
    }

    function handleOnBlur(){
        handleBlur(id)
    }

    return(
        <li className="todoList__item" key={id}>
                <label htmlFor={id}>
                    <input
                    id={id}
                    className="checkbox"
                    name="checkBox"
                    type="checkBox"
                    onChange={handleChangeCheckbox}
                    checked={status} />
                    <span>
                        {status ? "✓" :"" }
                    </span>
                </label>
            {
            !isEditing ?(
                <button type="button" onClick={todoIsEditing} className="task">{title}</button>
            ) : (
                <form onSubmit={todoIsEditing}>
                    <input
                        type="text"
                        name="createTodo"
                        onChange={handleChangeInput}
                        onBlur={handleOnBlur}
                        disabled={status}
                        defaultValue={title}
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus
                        />
                    <input
                        type="submit"
                        hidden/>
                </form>
                )
            }
            <button type="button" onClick={handleRemoveTodo}>X</button>
        </li>
    );
}