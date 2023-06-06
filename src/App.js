import './App.scss';
import { useState } from 'react'; 
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

let  App =()=> {

  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);

  let addToDo = ()=> {
      if(todo !== '') {
        setTodos([...todos, todo]);
        setTodo("");
      }
  };

  let deleteButton = (text) => {
      let newTodos = todos.filter((todo)=> {
          return todo !== text;
      });
      setTodos(newTodos);
  };

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <TodoInput todo={todo} addToDo={addToDo} setTodo={setTodo}/>
      <TodoList  remove={deleteButton} list={todos}/>
    </div>
  );
};
  export default App;










  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //  import { useState } from "react";
  // import TodoInputs from "./components/TodoInputs";
  // import TodoList from "./components/TodoList";
  // import "./App.css";

  // let App = () => {
  //   let [todos, setTodos] = useState([]);
  //   let [todo, setTodo] = useState("");

  //   let addTodo = () => {
  //     if (todo !== "") {
  //       setTodos([...todos, todo]);
  //       setTodo("");
  //     }
  //   };

  //   let deleteTodo = (text) => {
  //     let newTodos = todos.filter((todo) => {
  //       return todo !== text;
  //     });
  //     setTodos(newTodos);
  //   };

  //   return (
  //     <div className="App">
  //       <h1>React Todo App</h1>
  //       <TodoInputs todo={todo} setTodo={setTodo} addTodo={addTodo} />
  //       <TodoList list={todos} remove={deleteTodo} />
  //     </div>
  //   );
  // };

  // export default App;