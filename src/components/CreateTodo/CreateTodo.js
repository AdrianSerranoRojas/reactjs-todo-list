import React from "react";

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