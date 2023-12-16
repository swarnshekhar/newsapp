import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export class Navbar extends Component { 
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="navbar-brand" to="#" >News Boy</h1>
        <div className="container-fluid">
          <ul className="navbar-nav  mx-5">
            <li className="nav-item"><Link className="nav-link" to="/general">General</Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link> </li>


          </ul>

        {/* <div className="topnav-right" id="navbarNav">
      <ul className="navbar-nav topnav-right">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
    </div> */}

<form className="d-flex" role="search">
          <input className="form-control me-2" type="search"placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success mx-2"type="submit">Search</button>
        </form>


        </div>
      </nav>
    )
  }
}

export default Navbar
