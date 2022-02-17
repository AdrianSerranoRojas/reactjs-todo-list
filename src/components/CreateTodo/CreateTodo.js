import React from "react";

import "./CreateTodo.scss";

export default function CreateTodo({handleSubmit, handleChangeInput}) {

function ClearInput(e){
    e.target.reset();
    handleSubmit(e);
}

    return(
        <section>
            <form onSubmit={ClearInput}>
                <input type="text" name="createTodo" onChange={handleChangeInput}/>
                <input type="submit" hidden/>
            </form>
        </section>
    );
}