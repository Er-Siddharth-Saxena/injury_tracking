import React from 'react'
import {nav} from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div >    
        <nav class="navbar navbar-expand-lg " id="main">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white" id="">
          
         
         
          
          {/* <li class="nav-item ">
            <a class="nav-link " href="#" > Dropdown
            </a>
             */}
          {/* </li> */}
          <li class="nav-item text-white" >
            <a class="nav-link active" aria-current="page" href="#"><Link to={"/"}>Home</Link></a>
          </li>
          <li class="nav-item text-white" >
            <a class="nav-link active" aria-current="page" href="#"><Link to={"/login"}>Login</Link></a>
          </li>
          <li class="nav-item text-white" >
            <a class="nav-link active" aria-current="page" href="#"><Link to={"/register"}>Register</Link></a>
          </li>
          <li class="nav-item text-white" >
            <a class="nav-link active" aria-current="page" href="#"><Link to={"/injuries"}>Injuries_List</Link></a>
          </li>
          <li class="nav-item text-white" >
            <a class="nav-link active" aria-current="page" href="#"><Link to={"/injuriesForm"}>Injuries_Form</Link></a>
          </li>
         
        </ul>
        <form class="d-flex" role="search">
          
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar;