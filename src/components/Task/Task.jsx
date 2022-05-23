import React,{useState} from "react";
import styles from "./task.module.css";


const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  let [value,setValue]=useState("");
  const [todo,setTodos]=useState=([]);

  
  return (
    <li data-cy="task" className={styles.task}>
      <input value={value} onChange={(e)=>{setValue(e.target.value)}}
      type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <button data-cy="task-remove-button" onClick={()=>{
        setTodos([...todo,{id:Date.now(),value:value}]);
        setValue("");
      }}>+</button>
    </li>
  );
};

export default Task;
