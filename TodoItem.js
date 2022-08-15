import React from "react";

function TodoItem (props) {
    console.log(props)
    return(
        <div>
            <div className="todo-item">
                {props.item}
                <button onClick={()=>{props.onDelete(props.id)}}>delete</button>
            </div>

        </div>
        
    )
}

export default TodoItem;