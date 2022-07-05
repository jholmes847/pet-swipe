import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";
import Shelter from "./shelter";


const Nav = (props) => { 
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shelter">Shelter</Link>
        </li>
       
      </ul>

      <hr />

      {/* <Route path="/" component={Home} /> */}
      <Route path="/shelter" component={Shelter} />
  
    </div>
  </Router>





return (
<>
<a href="/"> HOME</a>
<ul>
    <li>
        <a href="/shelter">Shelter</a>
    </li>
    <li>
        <a href="/volunteer">Volunteer</a>

    </li>
</ul>


</>

)

}

export default Nav