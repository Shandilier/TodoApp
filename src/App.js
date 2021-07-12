import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import {useState,useEffect} from 'react';
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {

  let initTodo;
  if(localStorage.getItem("todoArray")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem("todoArray"));
  }

  function onDelete(todo){
    console.log(todo.Sno);
    // let index = todoArray.indexOf(todo);
    // todoArray.splice(index,1);
    settodoArray(todoArray.filter((e)=>{
      return e.Sno !== todo.Sno;
    }));
    localStorage.setItem("todoArray",JSON.stringify(todoArray));
  }

  const onFormSubmit = (N,T,D)=>{
    console.log("Output");
    let todo = {
      Sno : N,
      title : T,
      desc : D
    }
    
    settodoArray([...todoArray,todo]);
    console.log(todo);
  }
  
  const [todoArray, settodoArray] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todoArray",JSON.stringify(todoArray));
  }, [todoArray])


  return (
    <>
      <Router>
      <Navbar title ="TodoList" searchBar = {false}></Navbar>
      <Switch>
        <Route path = "/add" render = {()=>{
          return(
            <React.Fragment>
              <AddTodo onFormSubmit = {onFormSubmit}></AddTodo>
            </React.Fragment>
          )
        }}>
        </Route>
        <Route path = "/todos" render = {()=>{
          return(
            <React.Fragment>
              <Todos todos = {todoArray} onDelete = {onDelete} onFormSubmit = {onFormSubmit}></Todos>
            </React.Fragment>
          )
        }}>
        </Route>
        
        
      </Switch>

      <Footer></Footer>

      </Router>
    </>
  );  
}

export default App;

