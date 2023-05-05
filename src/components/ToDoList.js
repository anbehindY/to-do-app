import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import styles from '../styles/ToDoList.module.css';

const ToDoList = ({ todoProp, handleChange, delTodo }) => (
  <ul className={styles.list}>
    {todoProp.map((todo) => (
      <ToDoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  todoProp: PropTypes.objectOf(PropTypes.object()).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
export default ToDoList;
