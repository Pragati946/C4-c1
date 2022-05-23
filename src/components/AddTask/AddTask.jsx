import React,{useState}from "react";
import styles from "./addTask.module.css";
import Task from "../Task/Task";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  let [value,setvalue] =useState("");
  const [todo,setTodos] = useState([]);
  const onDelete =(id)=>{
    let newTodo = todo.filter(todos=> todos.id!==id);
    setTodos(newTodo)
  }
  return (
    <div className={styles.todoForm}>
      <h1>Todo List</h1>
      <input value={value}
      onChange={(e)=>{setvalue(e.target.value)}}
       data-cy="add-task-input" type="text" placeholder="Add Task Here"/>
      <button 
      onClick={()=>{
        setTodos([
          ...todo,{id:Date.now(),value:value}]);
          setvalue("")
      }}
    
        data-cy="add-task-button">+</button>

        <div className={styles.todoForm}>
          {todo.map((todos)=>(
            <Task key={todos.id}todos={todos} onDelete={onDelete}/>
          ))}
        </div>
    </div>
  );
};

export default AddTask;
