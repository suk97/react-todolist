import React from 'react'

function Input( { onChange, onAdd , inputValue}) {
    
    return(
        <div>
            <input type="text" value={inputValue} onChange={onChange}></input>
            <button onChange={onChange} onClick={onAdd}>Add</button>
        </div>
    )
}

export default Input;