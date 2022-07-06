import logo from './logo.svg';
import './App.css';
import Add from './components/Add'
import Nav from './components/nav'
import Volunteer from './components/volunteer';
import {Routes, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Shelter from './components/shelter';



const App =(props)=> {
  const [animal, setAnimal] = useState([])
  const [showAnimal, setShowAnimal] = useState(false)
  const [showVolunteer, setShowVolunteer] = useState(false)
  const [showShelter, setShelter] = useState(false)
  
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
  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/animals/' + event.target.value)
      .then((response) => {
        getAnimal()
      })
  }
 

   useEffect(() => {
    getAnimal()
   }, [])

  return (
    <>
  <h1 className='title'>Pet-Swipe</h1>
  
<Nav />

 <nav>
  <button className ="btn btn-warning" onClick={()=>setShelter(s=>!s)} > Shelters Near Me</button>
   { showShelter ?
    <Shelter/>
    : "" }

 
  <button className ="btn btn-warning" onClick={()=>setShowVolunteer(s=>!s)} >Volunteer</button>
   { showVolunteer ?
    <Volunteer/>
   : ""  }
 </nav>
  
 
   <div className="animal">
 
  <button className="btn" onClick={toggleAdd}>A
  <br></br>D<br></br>D<br></br><br></br> A<br></br>N<br></br>I<br></br>M<br></br>A<br></br>L</button>
        {showAnimal == true ?
 
  <Add handleCreate={handleCreate} />
  : null}

 {animal.map((animal) => {
   return (
     <div className="animals" key={animal.id}>
       <h4>Name: {animal.name}</h4>
       <img className='image' src={animal.img} />
       <h5>Age: {animal.age}</h5>
       <h6>Breed: {animal.breed}</h6>
       <h7>Color: {animal.color}</h7>
       <br></br>
       <h8>Location: {animal.location}</h8>
       <br></br>
       <button className='x-btn' onClick={handleDelete} value={animal.id}>
  X
</button>
<br></br>
     </div>
   )
 })}
  </div>
  </>
  );
}



export default App;
