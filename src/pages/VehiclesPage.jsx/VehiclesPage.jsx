import { useState, useEffect } from 'react';
import AddVehicleForm from "../../components/AddVehicleForm/AddVehicleForm";

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState('')
  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await fetch('/api/vehicles')
      const json = await response.json()

      if(response.ok) {
        setVehicles(json)
      }
    }

    fetchVehicles()
  }, [])

  return (
    <>
    <h1>VehiclesPage</h1>
    <AddVehicleForm />
    { vehicles ?
      vehicles.map((vehicle) => (
        <li key={vehicle._id}>{vehicle.text}
        </li>
      ))
      :
      <h3>No Vehicles Yet!</h3>
    }
    </>
  );
}