import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import { useState, useRef } from 'react';
import TodoBoard from './components/TodoBoard';


function App() {
  const [inputValue, setInputValue] = useState({
    id:0,
    content: ''
  });

  const [todoList, setTodoList] = useState([]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  const nextId = useRef(1);

  const onAdd = (e) => {
    const newTodo = {
      id:nextId.current,
      content: inputValue
    }
    setTodoList(todoList.concat(newTodo))
    nextId.current += 1
  }

  const onDelete = (id) => {
    setTodoList(todoList.filter((todo)=> todo.id !== id ))
  }


  return (
    <div>

      <Input onChange={onChange} onAdd={onAdd}/>
      <TodoBoard todoList={todoList} onDelete={onDelete} />
    </div>
  );
}

export default App;
