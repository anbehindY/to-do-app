import PropTypes from 'prop-types';
import { useState } from 'react';

const InputTodo = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [warning, setWarning] = useState('');

  const titleSetter = (e) => {
    setTitle(e.target.value);
  };

  const submitTitle = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
      setWarning('');
    } else {
      setWarning('Please add item!');
    }
  };

  return (
    <>
      <form onSubmit={submitTitle} className="form-container">
        <input type="text" placeholder="Add Todo..." value={title} onChange={titleSetter} className="input-text" />
        <button type="button" className="input-submit">Submit</button>
      </form>
      <small className="input-warning">{warning}</small>
    </>
  );
};

InputTodo.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default InputTodo;
