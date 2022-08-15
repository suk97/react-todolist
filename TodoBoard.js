import React from "react";
import TodoItem from './TodoItem';

function TodoBoard (props) {
    console.log(props.todoList)

    return(
        <div>
        <div key="props.id">
            <h1>Todo List</h1>
            {props.todoList.map((item) => <TodoItem item={item.content} onDelete={props.onDelete} id={item.id} />)}
        </div>
        </div>
    )
}

export default TodoBoard;