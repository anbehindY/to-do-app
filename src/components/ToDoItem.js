import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

const ToDoItem = ({ itemProp, handleChange, delTodo }) => (
  <li className={styles.item}>
    <div className={styles.content}>
      <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
      <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
      <span style={itemProp.completed ? completedStyle : null}>{itemProp.title}</span>
    </div>
  </li>
);

ToDoItem.propTypes = {
  itemProp: PropTypes.objectOf(PropTypes.object()).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default ToDoItem;
