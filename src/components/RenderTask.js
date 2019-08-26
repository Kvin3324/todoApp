import React from 'react';

function RenderTask(props) {
  const taskList = props.tasks.map((element) =>
  <div className="input-item" key={element.toString()}>
      <input
        type="checkbox"
        onClick={props.handleClick}
        name={element}
        />
      <p class="value-task"> {element} </p>
    </div>
  )
  return (
    taskList
  );

}

export default RenderTask;