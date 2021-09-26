import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <TaskItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
