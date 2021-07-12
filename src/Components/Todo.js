import React from 'react';

export default function Todo(props){

    return(
        <>
            <li className = "list-group-item">
                <p> Sno: {props.todo.Sno}</p>
                <p> Title: {props.todo.title}</p>
                <p> Description: {props.todo.desc}</p>
                <button className="btn btn-primary" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
            </li>
        </>
    )
}
