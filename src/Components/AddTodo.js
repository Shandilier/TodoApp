import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function AddTodo(props) {

    const history = useHistory();
    const [N, setN] = useState("")
    const [T, setT] = useState("")
    const [D, setD] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        // console.log(N+" "+T+" "+D);
        console.log(props);
        props.onFormSubmit(N,T,D);
        setN("");
        setD("");
        setT("");
        // history.goBack();
    }
    
    return (
        <div className =" container">
            <h3 className="text-center my-3">Todo List</h3>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="1">Sno.</label>
                    <input type="text" class="form-control" id="1" placeholder="Enter Sno" value = {N} onChange={(e) =>{setN(e.target.value)}} style={{marginBottom:"10px"}} required />
                </div>
                <div class="form-group">
                    <label for="2">Title</label>
                    <input type="text" class="form-control" id="2" placeholder="Enter title" value = {T} onChange={(e) =>{setT(e.target.value)}} style={{marginBottom:"10px"}} required/>
                </div>
                <div class="form-group">
                    <label for="3">Description</label>
                    <input type="text" class="form-control" id="3" placeholder = "Enter description" value = {D} onChange={(e) =>{setD(e.target.value)}} style={{marginBottom:"10px"}} required/>
                </div>
                <br></br>
                <button type="submit" class="btn btn-success" >Add</button>
                <br></br>
                <br></br>
            </form>        
        </div>
    )
}
