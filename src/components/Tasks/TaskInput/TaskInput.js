import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './TaskInput.css';

const TaskInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Task Goal</label>
        <input
          style={{
            borderBlockColor: !isValid ? 'red' : 'black',
            background: !isValid ? 'salmon' : 'transparent'
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskInput;
