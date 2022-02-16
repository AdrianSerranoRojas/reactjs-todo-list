import React from "react";

import "./CreateTodo.scss";

export default function CreateTodo({handleSubmit, handleChangeInput}) {

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" name="createTodo" onChange={handleChangeInput}/>
                <input type="submit" />
            </form>
        </section>
    );
}