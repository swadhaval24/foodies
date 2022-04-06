import React from 'react';
import { Link } from 'react-router-dom';

const Navbar1 =()=>{
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="thali"><h3 className="btn btn-dark">Foodies</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <Link class="nav-link" className="btn btn-success"  to="/signin">Signin</Link>
        
        
      </div>

  
</nav>
    )
}
export default Navbar1;
