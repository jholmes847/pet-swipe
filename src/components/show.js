import React, { useState, useEffect } from 'react'


const Show = (props) => {
  const [animal, setShowAnimal] = useState({...props.animal})

  return (
    <>
    <h4>Name: {animal.name}</h4>
    <img className='image' src={animal.img} />
    <h5>Age: {animal.age}</h5>
    <h6>Breed: {animal.breed}</h6>
    <h7>Color: {animal.color}</h7>
    <h8>Location: {animal.location}</h8>
    </>
  )
}

export default Show