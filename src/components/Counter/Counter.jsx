import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count,setCounter] = useState(0);
  // sample value to be replaced

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      {/* <h1>Todo App</h1> */}
      <button onClick={()=> setCounter(count+1)}data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button onClick={()=>{
        if(count>0)
        setCounter(count-1)
      }} data-cy="task-counter-decrement-button">-</button>
    
    </div>
  );
};

export default Counter;
