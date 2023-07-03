import "./Navbar.css";
import React from 'react';
import Button1 from "./Button1.js"
import Button2 from "./Button2.js"
import Button3 from "./Button3.js"
import Icon from "./Icon.js";
export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body" id="Nav">
    <div className="container-fluid">
      <div className="d-flex flex-row mb-3">
        <div className="p-2"><div className="Icon"><Icon/></div></div>
       <div className="p-2 d-flex align-items-center"><strong class="Placement">PLACEMENT HUB</strong></div>

      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <div className="d-flex flex-row mb-7">
       <div className="p-2"><Button1/></div>
       <div className="p-2"><Button2/></div>
       <div className="p-2"><Button3/></div>
    
      </div>
    
      </div>
    </div>
  </nav>
    </div>
  )
}
