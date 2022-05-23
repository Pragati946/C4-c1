import React from "react";
import Counter from "./components/Counter/Counter";
import AddTask from "./components/AddTask/AddTask"
function App() {
  // const [inputList,setInputList]=useState("");
  // const [Items,setItems]=useState([]);
  // const itemEvent =(event)=>{
    // setInputList(event.target.value)
  // };
  // const listOfItems=()=>{

  // }
  return <div>
    {/* <div className="center_div"> */}
      {/* <br/> */}
      {/* <h1>ToDo List</h1> */}
      {/* <input type="text" placeholder="Add a Items" onChange={itemEvent}/> */}
      {/* <button onClick={listOfItems}>+</button> */}
      {/* <ol> */}
        {/* <li>{inputList}</li> */}

        {/* Items.map( (itemval) => { */}
          {/* // return   */}
                {/* // <li>{itemval}</li>  */}

        {/* // }) */}
        {/* </ol> */}
      {/* </div> */}
      {/* Code Here */}
      {/* <Task/> */}
      <Counter/>
      <AddTask/>
  </div>;
  
}

export default App;
