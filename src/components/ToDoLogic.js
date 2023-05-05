import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './ToDoList';
import InputTodo from './InputToDo';

const ToDoLogic = () => {
  const [todo, setTodo] = useState([
    {
      id: uuidv4(),
      title: 'Start your Youtube channel',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Work on side projects everyday',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Get up earlier',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodo((prevState) => prevState.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    }));
  };

  const delTodo = (id) => {
    setTodo([
      ...todo.filter((item) => item.id !== id),
    ]);
  };

  const addTask = (title) => {
    const newTask = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodo([...todo, newTask]);
  };

  return (
    <div>
      <InputTodo addTask={addTask} />
      <ToDoList todoProp={todo} handleChange={handleChange} delTodo={delTodo} />
    </div>
  );
};

export default ToDoLogic;
