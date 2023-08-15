import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AllVehiclePage() {
  const [vehicles, setVehicles] = useState([]);
  const fetchVehicles = async () => {
      const response = await fetch('/api/vehicles')
      const json = await response.json()

      if(response.ok) {
        setVehicles(json)
      }}


  useEffect(() => {
    fetchVehicles()
	}, [])

 const navigate = useNavigate();
function handleButtonClick(vehicle){
        navigate(`/vehicle/edit/${vehicle._id}`);
    }
	
	 async function handleDeleteButton(id){
        await fetch (`/api/vehicles/${id}`, {method:`delete`})
        fetchVehicles()
    }

  return (
    <>
    { vehicles ?
      vehicles.map((vehicle) => (
      <div key={vehicle._id}>
                        <Link to={`/${vehicle._id}`}>
                            <li>{vehicle.name}| {vehicle.text} | {vehicle.createdAt}</li>
                        </Link>
                        <button onClick={() => {handleButtonClick(vehicle)}}>Edit</button>
                        <button onClick={() => {handleDeleteButton(vehicle._id)}}>Delete</button>
                    </div>
      ))
      :
      <h3>No Vehicles Yet!</h3>
    }
    </>
  )
}
