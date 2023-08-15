import { useState, useEffect } from 'react';
// import EditVehicleForm from "../../components/EditVehicleForm/EditVehicleForm";

export default function AllVehiclePage() {
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
    <h1>Vehicle History</h1>
    { vehicles ?
      vehicles.map((vehicle) => (
        
      <li key={vehicle._id}>{vehicle.name} | {vehicle.text} | {vehicle.createdAt}
        </li>
      ))
      :
      <h3>No Vehicles Yet!</h3>
    }
    </>
  );
}
// export default function EditVehiclesPage() {


//   return (
//     <>
//     <h1>Edit Vehicle</h1>
//     <EditVehicleForm />

//     </>
//   );
// }
