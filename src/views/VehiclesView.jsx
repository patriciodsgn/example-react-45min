import React from 'react';
import "./VehiclesView.css";

function VehiclesView({vehicle}) {
  console.log(vehicle)
  console.log(vehicle.name)
  return (
    <div className='VehiclesView'>
      <h1>{vehicle.name}</h1>
      <p>{vehicle.description}</p>
      <img src={vehicle.image} alt={vehicle.name + ' images'} />
    </div>
  )
}

export default VehiclesView;