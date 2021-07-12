import React from 'react'
import Todo from "./Todo";
export default function Todos(props) {

    // console.log("Inside Todos");
    // console.log(props.todos.length);
    let myStyle = {
        minHeight:"100vh",
    }
    return (
        <div className="container my-3" style={{myStyle}}>
            
            {props.todos.length===0 ? "No todos to display!!" :
                props.todos.map(todo =>{
                    return(
                        <ul className="list-group">
                            <Todo todo = {todo} onDelete = {props.onDelete}></Todo>
                        </ul>
                    )
                })
        }
            {/* <Link className = "btn btn-success" to = "/add">Add</Link> */}
            <br></br>
            {/* <br></br> */}
        </div>
    )
}
