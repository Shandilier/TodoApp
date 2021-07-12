import React from 'react'
import {BrowserRouter as Router,Link, useHistory} from 'react-router-dom';
export default function Navbar(props) {
    const history = useHistory();
    return (
        <div>
            {/* <Router> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Todo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <button className="btn btn-secondary" onClick={()=>{history.push("/todos")}} style={{marginRight:"10px"}}>Todos</button>
                        </li>
                        <li className="nav-item">
                        <button className="btn btn-secondary" onClick={()=>{history.push("/add")}}>Add</button>
                        </li>
                    </ul>
                    {
                        props.searchBar?
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> : 
                        <p></p>
                    }
                    </div>
                </div>
            </nav>    
            {/* </Router>         */}
        </div>
    )
}
