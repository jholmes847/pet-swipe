import React, { useState, useEffect } from 'react'

const Add = (props) => {
    const emptyAnimal = {name:'', age:'',breed:'',color:'', location:'' }

const [animal, setAnimal] = useState(emptyAnimal)    

const handleChange = (event) => {
    setAnimal({...animal, [event.target.name]: event.target.value})
  }
const handleSubmit = (event) => {
  event.preventDefault()
  props.handleCreate(animal)
  setAnimal({name:'', age:'',breed:'',color:'', location:'' })
}



return (
    <>
        <div className='add-section'>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={animal.name} onChange={handleChange} />
        <br/><br/>
        
    <label htmlFor="age">Age: </label>
          <input type="text" name="age" value={animal.age} onChange={handleChange} />
        <br/><br/>
        <label htmlFor="breed">Breed: </label>
          <input type="text" name="breed" value={animal.breed} onChange={handleChange} />
        <br/><br/>        
        <label htmlFor="color">Color: </label>
          <input type="text" name="color" value={animal.color} onChange={handleChange} />
        <br/><br/>     
        <label htmlFor="location">Location: </label>
          <input type="text" name="location" value={animal.location} onChange={handleChange} />
        <br/><br/>                   
        <input type="submit" />
    </form>
    </div>
    </>
)

}

export default Add