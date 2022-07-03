import logo from './logo.svg';
import './App.css';
import Add from './components/login/Add'
// import React, { Components } from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shelter from "./Pages/Shelter"; 
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Volunteer from './Pages/Volunteer';


const App =(props)=> {
  const [animal, setAnimal] = useState([])
  const [showAnimal, setShowAnimal] = useState(false)

  const toggleAdd = () => {
		setShowAnimal(!showAnimal)
	}
  
 

  const getAnimal = () => {
    axios
      .get('http://localhost:8000/api/animals')
      .then(
        (response) => setAnimal(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
   }
   
   const handleCreate = (addAnimal) => {
    axios
      .post('http://localhost:8000/api/animals', addAnimal)
      .then((response) => {
        console.log(response)
        getAnimal()
      })
  }

   useEffect(() => {
    getAnimal()
   }, [])

  return (
    <>
  <h1 className='title'>Pet-Swipe</h1>
  <header>
    <div class="container clearfix">   

<div class= "navbar-wrapper">
    <div class="container">
        <nav class = "navbar navbar-inverse navbar-fixed-top" id="navbar_whole">

                <div class = "navbar-header">
                    <button type= "button" class = "navbar-toggle collapsed" data-toggle = "collapse" data-target= "#navbar" aria-expanded="false" aria-controls = "navbar">
                        
                        <span class="icon-bar">
                        </span>
                        <span class="icon-bar"> 
                        <button className="btn">  </button>
                       
                        </span>
                        <span class="icon-bar">
                        <button className="btn"><a href="{'./page3'}">Volunteer</a></button>
                         </span>
                        </button>
                               
                </div>    
        </nav>
    </div>
</div>
</div>
</header>

<Router>
            <Routes>
               
                <Route path='/Shelter' element={<Shelter/>} />
                <Route path='/Volunteer' element={<Volunteer/>} />
            
            </Routes>      
         
        </Router>


 
  
 
   <div className="animal">
 
  <button className="btn" onClick={toggleAdd}>Add Animal</button>
        {showAnimal == true ?
 
  <Add handleCreate={handleCreate} />
  : null}

 {animal.map((animal) => {
   return (
     <div className="animals" key={animal.id}>
       <h4>Name: {animal.name}</h4>
       <h5>Age: {animal.age}</h5>
       <h6>Breed: {animal.breed}</h6>
       <h7>Color: {animal.color}</h7>
       <br></br>
       <h8>Location: {animal.location}</h8>

     </div>
   )
 })}
</div>

  </>
  );
}

export default App;
