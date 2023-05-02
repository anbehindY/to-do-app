import ToDoItem from "./ToDoItem.js";
import styles from "../styles/ToDoList.module.css"

const ToDoList = ({ todoProp, handleChange, delTodo }) => {
    return (
      <ul className={styles.list}>
        {todoProp.map((todo) => (
          <ToDoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} />
        ))}
      </ul>
    );
  };
  export default ToDoList;
  