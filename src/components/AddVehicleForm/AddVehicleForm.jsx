import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function AddVehicleForm() {
  const [vehicleDetails, setVehicleDetails] = useState({
    name: '',
    text: '',
  });
  const [error, setError] = useState(null)
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(vehicleDetails);

    const response = await fetch('/api/vehicles', {
      method: 'POST',
      body: JSON.stringify(vehicleDetails),
      headers: {
        'Content-Type' : 'application/json'
      },
    });
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    } else {
      setVehicleDetails('')
      setError(null)
      console.log('new vehicle added', json)
      navigate('/vehicles'); // Navigate to "/allVehicles" after successful form submission
    }
  }
    function handleChange(evt) {
      console.log(evt.target.name, evt.target.value);
      setVehicleDetails({
      ...vehicleDetails,
      [evt.target.name]:evt.target.value
    });
    console.log(vehicleDetails);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name='name' 
          value={vehicleDetails.name}
          placeholder='Name of Vehicle'
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="text"
          value={vehicleDetails.text}
          onChange={handleChange}
          placeholder='Add Description'
          required
        />
        <button className="btn-primary btn" type="submit">Add Vehicle</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
  }
  